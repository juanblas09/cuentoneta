import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

// Models
import { ContentCampaign } from '@models/content-campaign.model';

// Components
import { PortableTextParserComponent } from '../portable-text-parser/portable-text-parser.component';

@Component({
	selector: 'cuentoneta-carousel',
	standalone: true,
	imports: [CommonModule, CarouselModule, NgOptimizedImage, RouterLink, PortableTextParserComponent],
	template: `
		<section class="block">
			<owl-carousel-o [options]="options" class="mx-auto block max-w-[960px]">
				@for (slide of slides(); track slide.slug) {
					<ng-template carouselSlide>
						<div class="slide mx-3">
							<a [routerLink]="slide.url" class="mx-3 md:hidden">
								<header class="mb-3">
									<h3 class="text-lg font-bold tracking-normal">
										<cuentoneta-portable-text-parser
											[paragraphs]="slide.contents.xs.title"
										></cuentoneta-portable-text-parser>
									</h3>
									<h4 class="h4 subtitle text-gray-600">
										<cuentoneta-portable-text-parser
											[paragraphs]="slide.contents.xs.subtitle"
										></cuentoneta-portable-text-parser>
									</h4>
								</header>
								<img
									[ngSrc]="slide.contents.xs.imageUrl"
									width="720"
									height="280"
									class="rounded-2xl"
									priority
									alt=""
								/>
							</a>
							<a [routerLink]="slide.url" class="mx-3 max-md:hidden">
								<header class="mb-3">
									<h3 class="text-lg font-bold tracking-normal">
										<cuentoneta-portable-text-parser
											[paragraphs]="slide.contents.md.title"
										></cuentoneta-portable-text-parser>
									</h3>
									<h4 class="h4 subtitle text-gray-600">
										<cuentoneta-portable-text-parser
											[paragraphs]="slide.contents.md.subtitle"
										></cuentoneta-portable-text-parser>
									</h4>
								</header>
								<img
									[ngSrc]="slide.contents.md.imageUrl"
									width="960"
									height="280"
									class="rounded-2xl"
									priority
									alt=""
								/>
							</a>
						</div>
					</ng-template>
				}
			</owl-carousel-o>
		</section>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
	slides = input<ContentCampaign[]>([]);

	readonly options: OwlOptions = Object.assign({
		autoplay: true,
		autoplaySpeed: 1200,
		autoplayMouseleaveTimeout: 5000,
		loop: true,
		mouseDrag: false,
		dots: true,
		navSpeed: 500,
		responsive: {
			0: {
				items: 1,
			},
		},
		nav: false,
	});
}
