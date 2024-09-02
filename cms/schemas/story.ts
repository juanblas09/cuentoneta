import { supportedLanguages } from '../utils/localization';
import { DocumentTextIcon, DocumentVideoIcon, PlayIcon, TwitterIcon } from '@sanity/icons';
import { resource } from './resourceType';
import { defineArrayMember, defineField, defineType } from 'sanity';

const audioRecording = defineField({
	name: 'audioRecording',
	title: 'Grabación de audio con el relato del texto',
	type: 'object',
	icon: PlayIcon,
	preview: {
		select: {
			title: 'title',
			url: 'spaceUrl',
		},
		prepare(selection) {
			const { title, url } = selection;
			return {
				title: `${title}`,
				subtitle: ` URL Grabación: ${url}`,
			};
		},
	},
	fields: [
		{
			name: 'title',
			title: 'Título asignado a la grabación de audio',
			type: 'string',
		},
		{
			name: 'url',
			title: 'URL del archivo de audio (mp3, wav, etc.)',
			type: 'url',
		},
	],
});

const spaceRecording = defineField({
	name: 'spaceRecording',
	title: 'Grabación de Spaces de X',
	type: 'object',
	icon: TwitterIcon,
	preview: {
		select: {
			title: 'postId',
			url: 'spaceUrl',
		},
		prepare(selection) {
			const { title, url } = selection;
			return {
				title: `${title} | ID Tweet: ${'abc'} | URL Grabación: ${url}`,
				subtitle: `${url}`,
			};
		},
	},
	fields: [
		{
			name: 'postId',
			title: 'ID de post de X',
			type: 'string',
		},
		{
			name: 'title',
			title: 'Título del Space',
			type: 'string',
		},
		{
			name: 'spaceUrl',
			title: 'URL de la grabación del space',
			type: 'url',
		},
		{
			name: 'duration',
			title: 'Duración del space',
			type: 'string',
		},
	],
});

const youtubeVideo = defineField({
	name: 'youTubeVideo',
	title: 'Video de YouTube',
	type: 'object',
	icon: DocumentVideoIcon,
	preview: {
		select: {
			title: 'title',
			url: 'url',
		},
		prepare(selection) {
			const { title, url } = selection;
			return {
				title: `${title}`,
				subtitle: `URL Video: ${url}`,
			};
		},
	},
	fields: [
		{
			name: 'title',
			title: 'Título del video',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Descripción del video',
			type: 'blockContent',
		},
		{
			name: 'videoId',
			title: 'ID del video de YouTube',
			type: 'string',
		},
	],
});

export default defineType({
	name: 'story',
	title: 'Cuento',
	type: 'document',
	icon: DocumentTextIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Título',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'language',
			title: 'Idioma',
			type: 'string',
			options: {
				list: supportedLanguages.map((lang) => ({
					title: lang.title,
					value: lang.id,
				})),
				layout: 'radio',
			},
		}),
		defineField({
			name: 'author',
			title: 'Autor/a',
			type: 'reference',
			to: { type: 'author' },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'mediaSources',
			title: 'Información de recursos multimedia asociados a la historia en otras plataformas web',
			type: 'array',
			of: [defineArrayMember(audioRecording), defineArrayMember(spaceRecording), defineArrayMember(youtubeVideo)],
		}),
		defineField({
			name: 'resources',
			title: 'Recursos web asociados a la story y su contenido',
			type: 'array',
			of: [defineArrayMember(resource)],
		}),
		defineField({
			name: 'badLanguage',
			title: '¿Contiene lenguaje adulto?',
			type: 'boolean',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'approximateReadingTime',
			title: 'Tiempo de lectura aproximado',
			type: 'computedNumber',
			readOnly: true,
			options: {
				buttonText: 'Recalcular',
				documentQuerySelection: `
                    "blockContentParagraphs": *[_type == 'story' && _id == ^._id][0]{ body }
                `,
				reduceQueryResult: (result: {
					draft?: { blockContentParagraphs: { body } };
					published: { blockContentParagraphs: { body } };
				}) => {
					const textBody = result.draft
						? result.draft.blockContentParagraphs.body
						: result.published.blockContentParagraphs.body;

					const plainTextParagraphs = textBody.map((x) => x.children[0].text);
					const wordCount = plainTextParagraphs
						.map((paragraph) => paragraph.split(' ').length)
						.reduce((previous, current) => previous + current);

					return Math.ceil(wordCount / 200);
				},
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'epigraphs',
			title: 'Epígrafes',
			type: 'array',
			validation: (Rule) => Rule.required(),
			of: [
				defineArrayMember({
					name: 'epigraph',
					title: 'Epígrafe',
					type: 'object',
					fields: [
						{
							name: 'text',
							title: 'Texto del epígrafe',
							type: 'blockContent',
						},
						{
							name: 'reference',
							title: 'Referencia del epígrafe',
							description: 'Referencia del origen del epígrafe',
							type: 'string',
						},
					],
				}),
			],
		}),
		defineField({
			name: 'body',
			title: 'Cuerpo del cuento',
			type: 'blockContent',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'review',
			title: 'Reseña',
			type: 'blockContent',
		}),
		defineField({
			name: 'originalPublication',
			title: 'Publicación original',
			type: 'string',
		}),
	],
	initialValue: {
		language: 'es',
	},
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { title, author } = selection;
			return {
				title: `${title}`,
				subtitle: `por ${author}`,
			};
		},
	},
});
