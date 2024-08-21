// Sanity Client
import { client } from '../_helpers/sanity-connector';

// Queries
import { mapResources, mapStorylist, mapStorylistTeaser } from '../_utils/functions';
import { fetchLandingPageContentQuery, fetchNewestStoriesQuery } from '../_queries/content.query';
import { FetchLandingPageContentQueryResult, FetchNewestStoriesQueryResult } from '../sanity/types';
import { SanityQueryArgs } from '../interfaces/queryArgs';
import { mapMediaSourcesForStorylist } from '../_utils/media-sources.functions';

export async function fetchLandingPageContent() {
	const result: FetchLandingPageContentQueryResult = await client.fetch(fetchLandingPageContentQuery);
	const cards = [];
	const previews = [];

	for (const preview of result.previews) {
		previews.push(await mapStorylist(preview));
	}

	for (const card of result.cards) {
		cards.push(await mapStorylistTeaser(card));
	}

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
