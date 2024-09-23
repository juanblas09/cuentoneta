// Core
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

	public getLandingPageContent() {
		return this.http.get<LandingPageContent>(`${this.prefix}/landing-page`);
	}

	public getContentCampaigns$(): Observable<ContentCampaign[]> {
		return of([
			{
				shortTitle: 'Desde el barrio de Flores...',
				title: 'Desde el barrio de Flores...',
				shortDescription: '... la entrega #1 de este nuevo ciclo',
				description: '... la entrega #1 del ciclo "Pluma de la semana"',
				smallImageUrl: './assets/img/pluma-de-la-semana-1-small.jpg',
				largeImageUrl: './assets/img/pluma-de-la-semana-1.jpg',
				url: '../author/alejandro-dolina',
			},
			{
				shortTitle: 'Los cuentos de iSAT',
				title: 'Los cuentos de iSAT',
				shortDescription: '...recopilados en texto y video',
				description: '...recopilados en texto y video con narración de Alberto Laiseca',
				smallImageUrl: './assets/img/cuentos-de-terror-small.jpg',
				largeImageUrl: './assets/img/cuentos-de-terror.jpg',
				url: '../storylist/cuentos-de-terror-de-alberto-laiseca',
			},
			{
				shortTitle: '📗 Cuentos clásicos...',
				title: '📗 De ediciones Proyecto Territorio...',
				shortDescription: '... por autores santafesinos',
				description: '... una selección de cuentos clásicos de plumas santafesinas',
				smallImageUrl: './assets/img/ciudades-campos-pueblos-islas-small.jpg',
				largeImageUrl: './assets/img/ciudades-campos-pueblos-islas.jpg',
				url: '../storylist/cuentos-de-terror-de-alberto-laiseca',
			},
		]);
	}
}
