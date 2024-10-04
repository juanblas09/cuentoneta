// Core
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, isPlatformBrowser } from '@angular/common';

// 3rd party modules
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// Services
import { ContentService } from '../../providers/content.service';
import { ThemeService } from '../../providers/theme.service';

// Models
import { ContentCampaign } from '@models/content-campaign.model';
import { LandingPageContent } from '@models/landing-page-content.model';
import { StorylistTeaser } from '@models/storylist.model';

// Directives
import { FetchContentDirective } from '../../directives/fetch-content.directive';
import { MetaTagsDirective } from '../../directives/meta-tags.directive';

// Componentes
import { ContentCampaignCarouselComponent } from '../../components/content-campaign-carousel/content-campaign-carousel.component';
import { StorylistCardComponent } from '../../components/storylist-card-component/storylist-card.component';

@Component({
	selector: 'cuentoneta-home',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [CommonModule, ContentCampaignCarouselComponent, NgxSkeletonLoaderModule, StorylistCardComponent],
	hostDirectives: [FetchContentDirective, MetaTagsDirective],
})
export class HomeComponent {
	// Services
	private contentService = inject(ContentService);
	private themeService = inject(ThemeService);

	// Directives
	private fetchContentDirective = inject(FetchContentDirective);
	private metaTagsDirective = inject(MetaTagsDirective);

	cards: StorylistTeaser[] = [];
	campaigns: ContentCampaign[] = [];
	skeletonColor = this.themeService.pickColor('zinc', 300);

	constructor() {
		// Asignación inicial para dibujar skeletons
		this.cards = [];
		this.metaTagsDirective.setDefault();

		const platformId = inject(PLATFORM_ID);
		if (!isPlatformBrowser(platformId)) {
			return;
		}

		// En cliente-side, posteriormente, se cargan los decks con las historias y
		// las campañas de contenido, según la configuración
		this.loadLandingPageContent();
	}

	private loadLandingPageContent() {
		this.fetchContentDirective
			.fetchContent$<LandingPageContent>(this.contentService.getLandingPageContent())
			.pipe(takeUntilDestroyed())
			.subscribe(({ cards, campaigns }) => {
				this.cards = cards;
				this.campaigns = campaigns;
			});
	}
}
