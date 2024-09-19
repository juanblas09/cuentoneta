// Sanity Client
import { client } from '../_helpers/sanity-connector';

// Queries
import { fetchNewestStoriesQuery } from '../_queries/content.query';

// Funciones
import { fetchStorylistTeasers } from '../storylist/storylist.service';
import { mapMediaSourcesForStorylist } from '../_utils/media-sources.functions';

// Tipos
import { FetchNewestStoriesQueryResult } from '../sanity/types';

// Modelos
import { LandingPageContent } from '@models/landing-page-content.model';

export async function fetchLandingPageContent(): Promise<LandingPageContent> {
	const cards = await fetchStorylistTeasers();

	return { cards };
}

export async function fetchNewestStories(args: { limit: number }) {
	const result: FetchNewestStoriesQueryResult = await client.fetch(fetchNewestStoriesQuery, {
		start: 0,
		end: args.limit,
	});

	const stories = [];

	// Toma las publicaciones que fueron traídas en la consulta a Sanity y las mapea a una colección de publicaciones
	for (const story of result) {
		const { body, mediaSources, ...properties } = story;

		stories.push({
			...properties,
			media: mapMediaSourcesForStorylist(mediaSources),
			resources: [],
			paragraphs: body,
		});
	}

	return stories;
}
