// Sanity Client
import { client } from '../_helpers/sanity-connector';

// Queries
import { fetchStorylistTeasers } from '../storylist/storylist.service';
import { fetchNewestStoriesQuery } from '../_queries/content.query';
import { FetchNewestStoriesQueryResult } from '../sanity/types';
import { mapMediaSourcesForStorylist } from '../_utils/media-sources.functions';

export async function fetchLandingPageContent() {
	const cards = await fetchStorylistTeasers();
	const previews: [] = [];

	return { previews, cards };
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
