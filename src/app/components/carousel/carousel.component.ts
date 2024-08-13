import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { ContentCampaign } from '@models/content.model';

@Component({
	selector: 'cuentoneta-carousel',
	standalone: true,
	imports: [CommonModule, CarouselModule, NgOptimizedImage, RouterLink],
	template: `
		<section class="block">
			<owl-carousel-o [options]="options" class="mx-auto block max-w-[960px]">
				@for (slide of slides(); track slide.title) {
					<ng-template carouselSlide>
						<div class="slide">
							<header class="mb-3">
								<h3 class="text-lg font-bold tracking-normal">{{ slide.title }}</h3>
								<h4 class="h4 subtitle text-gray-600">{{ slide.description }}</h4>
							</header>
							<a [routerLink]="slide.url"
								><img [ngSrc]="slide.imageUrl" width="960" height="280" class="rounded-2xl" priority alt=""
							/></a>
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
		autoplaySpeed: 500,
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
