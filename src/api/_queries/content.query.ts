import { defineQuery } from 'groq';

export const fetchNewestStoriesQuery = defineQuery(`*[_type == 'story']
{
    _createdAt,
    'slug': slug.current,
    title,
    language,
    badLanguage,
    categories,
    body[0...3],
    originalPublication,
    approximateReadingTime,
    mediaSources[]{ 
        _id,
        _type,
        title, 
        icon
    },
    'author': author->{
        slug,
        name,
        image,
         nationality->
    }
}|order(_createdAt desc)[$start...$end]`);
