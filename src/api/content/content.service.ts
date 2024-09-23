// Conector de Sanity
import { client } from '../_helpers/sanity-connector';

// Modelos
import { LandingPageContent } from '@models/landing-page-content.model';
import { mapNewestStories } from '../_utils/functions';

// Queries
import { fetchNewestStoriesQuery } from '../_queries/content.query';
import { landingPageContentQuery } from '../_queries/content.query';

// Utils
import { mapLandingPageContent } from '../_utils/functions';

export async function fetchLandingPageContent(): Promise<LandingPageContent> {
	const result = await client.fetch(landingPageContentQuery);

	if (!result) {
		throw new Error('Landing page content not found');
	}

	return mapLandingPageContent(result);
}

export async function fetchNewestStories(args: { limit: number }) {
	const result = await client.fetch(fetchNewestStoriesQuery, {
		start: 0,
		end: args.limit ?? 20,
	});

	return mapNewestStories(result);
}
