import { Tag } from '@models/tag.model';

export const tagMock: Tag = {
	title: 'Colaborativa',
	slug: 'colaborativa',
	shortDescription: 'Lista de textos generada colaborativamente por la comunidad.',
	description: [
		{
			_type: 'block',
			style: 'normal',
			_key: '558175c4191c',
			markDefs: [],
			children: [
				{
					text: 'Lista de textos generada colaborativamente por la comunidad.',
					_key: '423250ef7cf30',
					_type: 'span',
					marks: [],
				},
			],
		},
	],
	icon: {
		provider: 'mdi',
		name: 'people',
		svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="width: 1.5em; height: 1em;"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>`,
	},
};
