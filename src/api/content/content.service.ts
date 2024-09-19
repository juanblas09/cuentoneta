// Sanity Client
import { client } from '../_helpers/sanity-connector';

// Queries
import { fetchNewestStoriesQuery } from '../_queries/content.query';

// Funciones
import { fetchStorylistTeasers } from '../storylist/storylist.service';

// Modelos
import { LandingPageContent } from '@models/landing-page-content.model';
import { mapNewestStories } from '../_utils/functions';

export async function fetchLandingPageContent(): Promise<LandingPageContent> {
	const cards = await fetchStorylistTeasers();

	return { cards };
}

export async function fetchNewestStories(args: { limit: number }) {
	const result = await client.fetch(fetchNewestStoriesQuery, {
		start: 0,
		end: args.limit ?? 20,
	});

	return mapNewestStories(result);
}
