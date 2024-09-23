import { TextBlockContent } from '@models/block-content.model';

export interface ContentCampaign {
	title: string;
	shortTitle: string;
	shortDescription: string;
	description: string;
	smallImageUrl: string;
	largeImageUrl: string;
	url: string;
}

type Viewport = 'xs' | 'md';

export interface ContentCampaignObj {
	slug: string;
	url: string;
	description: TextBlockContent[];
	contents: { [key in Viewport]: { title: TextBlockContent[]; subtitle: TextBlockContent[]; imageUrl: string } };
}
