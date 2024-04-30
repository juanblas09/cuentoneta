// Core
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

// Environment
import { environment } from '../environments/environment';

// Models
import { Story, StoryCard, StoryDTO } from '@models/story.model';
import { AudioRecording, Media, MediaTypes, SpaceRecording, YouTubeVideo } from '@models/media.model';

@Injectable({ providedIn: 'root' })
export class StoryService {
	private readonly prefix = `${environment.apiUrl}api/story`;
	constructor(private http: HttpClient) {}
	public getBySlug(slug: string): Observable<Story> {
		const params = new HttpParams().set('slug', slug);
		return this.http
			.get<StoryDTO>(`${this.prefix}/read`, { params })
			.pipe(map((story) => this.parseStoryContent(story)));
	}

	public parseStoryCardContent(story: StoryDTO): StoryCard {
		return {
			...story,
			author: {
				...story.author,
				imageUrl: this.parseAvatarImageUrl(story.author.imageUrl),
			},
			prologues: story.prologues ?? [],
			paragraphs: story?.paragraphs ?? [],
			summary: story?.summary ?? [],
			media: story.media?.map((x) => this.mediaTypesAdapter(x)) ?? [],
		};
	}

	private parseStoryContent(story: StoryDTO): Story {
		return {
			...story,
			prologues: story.prologues ?? [],
			paragraphs: story?.paragraphs ?? [],
			summary: story?.summary ?? [],
			author: {
				...story.author,
				imageUrl: this.parseAvatarImageUrl(story.author.imageUrl),
				biography: story.author.biography ?? [],
			},
			media: story.media?.map((x) => this.mediaTypesAdapter(x)) ?? [],
		};
	}

	private parseAvatarImageUrl(imageUrl: string | undefined): string {
		return imageUrl ?? 'assets/img/default-avatar.jpg';
	}

	/**
	 * Adaptador utilizado para mappear los distintos tipos de media que
	 * pueden existir en la plataforma a su tipo específico.
	 * @param media
	 * @private
	 */
	private mediaTypesAdapter(media: Media): MediaTypes {
		if (media.type === 'spaceRecording') {
			return media as SpaceRecording;
		}
		if (media.type === 'audioRecording') {
			return media as AudioRecording;
		}
		if (media.type === 'youTubeVideo') {
			return media as YouTubeVideo;
		} else {
			throw new Error(`El tipo ${media.type} no está soportado.`);
		}
	}
}
