import { defineQuery } from 'groq';

export const fetchNewestStoriesQuery = defineQuery(`*[_type == 'story'][$start...$end]
{
    _createdAt,
    'slug': slug.current,
    title,
    language,
    badLanguage,
    'body': coalesce(body[0...3], []),
    originalPublication,
    approximateReadingTime,
    'resources': [],
    'mediaSources': coalesce(mediaSources[], []),
    'author': author->{ 
        slug,
        name,
        image,
        nationality->,
        'biography': [],
        'resources': [],
    }
}|order(_createdAt desc)[$start...$end]`);
