import { GridItemPlacementConfig, Storylist } from './storylist.model';

export interface StorylistDeckConfig {
	title: string;
	slug: string;
	ordering: 'asc' | 'desc' | undefined | null;
	amount: number;
	previewGridSkeletonConfig: StorylistGridSkeletonConfig;
	gridSkeletonConfig: StorylistGridSkeletonConfig;
}

export interface StorylistCardDeck extends StorylistDeckConfig {
	storylist?: Storylist;
}

export interface StorylistGridSkeletonConfig {
	gridTemplateColumns: string;
	titlePlacement: GridItemPlacementConfig;
	cardsPlacement: GridItemPlacementConfig[];
}

export interface ContentCampaign {
	title: string;
	description: string;
	imageUrl: string;
	url: string;
}
