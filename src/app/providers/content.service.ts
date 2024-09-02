// Core
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

// Interfaces
import { ContentCampaign } from '@models/content.model';
import { LandingPageContent } from '@models/landing-page-content.model';

import { Storylist } from '@models/storylist.model';
// Providers
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ContentService {
	private readonly prefix = `${environment.apiUrl}api/content`;

	// Services
	private http = inject(HttpClient);

	public getLandingPageContent(): Observable<LandingPageContent> {
		return this.http.get<LandingPageContent>(`${this.prefix}/landing-page`).pipe(
			map((content) => ({
				cards: content.cards,
				previews: content.cards,
			})),
		);
	}

	public getContentCampaigns$(): Observable<ContentCampaign[]> {
		return of([
			{
				title: 'Desde el barrio de Flores...',
				description: '... cinco cuentos para la entrega #1 del ciclo "Pluma de la semana"',
				imageUrl: './assets/img/pluma-de-la-semana-1.png',
				url: '../author/alejandro-dolina',
			},
			{
				title: 'Los cuentos de la medianoche de iSAT',
				description: '...recopilados en texto y video con narración de Alberto Laiseca',
				imageUrl: './assets/img/cuentos-de-terror.jpg',
				url: '../storylist/cuentos-de-terror-de-alberto-laiseca',
			},
		]);
	}

	// ToDo: Obtener listas de navs desde API
	public getNavLists(): Pick<Storylist, 'slug' | 'title'>[] {
		return [
			{ slug: 'otono-2023', title: 'Cuentos de Otoño' },
			{ slug: 'fec-english-sessions', title: 'FEC English Sessions' },
			{ slug: 'verano-2022', title: 'La Cuentoneta 1.0' },
		];
	}

	/**
	 * Hace fetch de la configuración de landing page desde el origen de datos y genera
	 * una tupla de arrays de objetos compuestos de tipo StorylistCardDeck, los cuales
	 * contienen la configuración y la correspondiente información para renderizar
	 * los decks de previews y cards de cada storylist.
	 */
	public fetchStorylistDecks(): Observable<LandingPageContent> {
		return this.getLandingPageContent().pipe(
			map(({ previews, cards }) => {
				return {
					previews: previews,
					cards: cards,
				};
			}),
		);
	}
}
