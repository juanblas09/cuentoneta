// Core
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

// Interfaces
import { ContentCampaign } from '@models/content.model';
import { LandingPageContent } from '@models/landing-page-content.model';

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
			map(({ cards }) => ({
				cards: cards,
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
}
