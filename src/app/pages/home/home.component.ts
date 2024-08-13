// Core
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';

// Routing
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../app.routes';

// Services
import { ContentService } from '../../providers/content.service';

// Models
import { ContentCampaign, StorylistCardDeck } from '@models/content.model';

// Directives
import { FetchContentDirective } from '../../directives/fetch-content.directive';
import { MetaTagsDirective } from '../../directives/meta-tags.directive';

// Componentes
import { PublicationCardComponent } from '../../components/publication-card/publication-card.component';
import { StorylistCardDeckComponent } from 'src/app/components/storylist-card-deck/storylist-card-deck.component';
import { StorylistCardComponent } from '../../components/storylist-card-component/storylist-card.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { delay, Observable, of } from 'rxjs';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ThemeService } from '../../providers/theme.service';

@Component({
	selector: 'cuentoneta-home',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [
		CommonModule,
		NgOptimizedImage,
		PublicationCardComponent,
		StorylistCardDeckComponent,
		RouterModule,
		StorylistCardComponent,
		CarouselComponent,
		NgxSkeletonLoaderModule,
	],
	hostDirectives: [FetchContentDirective, MetaTagsDirective],
})
export class HomeComponent {
	// Directives
	public fetchContentDirective = inject(FetchContentDirective);
	private metaTagsDirective = inject(MetaTagsDirective);

	// Services
	private contentService = inject(ContentService);

	readonly appRoutes = AppRoutes;

	// Copy the elements from $slides and adapt to the new type
	readonly slides$ = this.contentService.getContentCampaigns$();

	cards: StorylistCardDeck[] = [];
	previews: StorylistCardDeck[] = [];

	private themeService = inject(ThemeService);
	skeletonColor = this.themeService.pickColor('zinc', 300);

	constructor() {
		// Asignación inicial para dibujar skeletons
		this.cards = this.contentService.contentConfig.cards;
		this.previews = this.contentService.contentConfig.previews;
		this.metaTagsDirective.setDefault();

		const platformId = inject(PLATFORM_ID);
		if (!isPlatformBrowser(platformId)) {
			return;
		}

		// En cliente-side, posteriormente, se cargan los decks con las historias, según la configuración de contenido
		this.loadStorylistDecks();
	}

	private loadStorylistDecks() {
		this.fetchContentDirective
			.fetchContent$<{ previews: StorylistCardDeck[]; cards: StorylistCardDeck[] }>(
				this.contentService.fetchStorylistDecks(),
			)
			.pipe(takeUntilDestroyed())
			.subscribe(({ previews, cards }) => {
				this.previews = previews;
				this.cards = cards;
			});
	}
}
