/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
	_type: 'sanity.imagePaletteSwatch';
	background?: string;
	foreground?: string;
	population?: number;
	title?: string;
};

export type SanityImagePalette = {
	_type: 'sanity.imagePalette';
	darkMuted?: SanityImagePaletteSwatch;
	lightVibrant?: SanityImagePaletteSwatch;
	darkVibrant?: SanityImagePaletteSwatch;
	vibrant?: SanityImagePaletteSwatch;
	dominant?: SanityImagePaletteSwatch;
	lightMuted?: SanityImagePaletteSwatch;
	muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
	_type: 'sanity.imageDimensions';
	height?: number;
	width?: number;
	aspectRatio?: number;
};

export type SanityFileAsset = {
	_id: string;
	_type: 'sanity.fileAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	source?: SanityAssetSourceData;
};

export type Geopoint = {
	_type: 'geopoint';
	lat?: number;
	lng?: number;
	alt?: number;
};

export type Tag = {
	_id: string;
	_type: 'tag';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	description?: string;
	icon?: IconPicker;
};

export type BlockContent = Array<
	| {
			children: Array<{
				marks?: Array<string>;
				text: string;
				_type: 'span';
				_key: string;
			}>;
			style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
			listItem?: 'bullet';
			markDefs?: Array<{
				href: string;
				_type: 'link';
				_key: string;
			}>;
			level?: number;
			_type: 'block';
			_key: string;
	  }
	| {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			_type: 'image';
			_key: string;
	  }
>;

export type Storylist = {
	_id: string;
	_type: 'storylist';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	description?: string;
	language?: 'es' | 'en';
	displayDates?: boolean;
	comingNextLabel?: string;
	editionPrefix?: string;
	featuredImage?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	tags?: Array<{
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: 'tag';
	}>;
	gridConfig?: {
		gridTemplateColumns?: string;
		titlePlacement?: {
			order?: number;
			startCol?: string;
			endCol?: string;
			startRow?: string;
			endRow?: string;
		};
		cardsPlacement?: Array<{
			publication?: {
				story?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'story';
				};
				published?: boolean;
				publishingOrder?: number;
				publishingDate?: string;
			};
			image?: {
				asset?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				_type: 'image';
			};
			imageSlug?: Slug;
			order?: number;
			startCol?: string;
			endCol?: string;
			startRow?: string;
			endRow?: string;
			_type: 'deckPreviewConfigItem';
			_key: string;
		}>;
	};
	previewGridConfig?: {
		gridTemplateColumns?: string;
		titlePlacement?: {
			order?: number;
			startCol?: string;
			endCol?: string;
			startRow?: string;
			endRow?: string;
		};
		cardsPlacement?: Array<{
			publication?: {
				story?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'story';
				};
				published?: boolean;
				publishingOrder?: number;
				publishingDate?: string;
			};
			image?: {
				asset?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				_type: 'image';
			};
			imageSlug?: Slug;
			order?: number;
			startCol?: string;
			endCol?: string;
			startRow?: string;
			endRow?: string;
			_type: 'deckPreviewConfigItem';
			_key: string;
		}>;
		ordering?: 'asc' | 'desc';
	};
};

export type Story = {
	_id: string;
	_type: 'story';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	language?: 'es' | 'en';
	author?: {
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		[internalGroqTypeReferenceTo]?: 'author';
	};
	mediaSources?: Array<
		| {
				title?: string;
				url?: string;
				_type: 'audioRecording';
				_key: string;
		  }
		| {
				postId?: string;
				title?: string;
				spaceUrl?: string;
				duration?: string;
				_type: 'spaceRecording';
				_key: string;
		  }
		| {
				title?: string;
				description?: BlockContent;
				videoId?: string;
				_type: 'youTubeVideo';
				_key: string;
		  }
	>;
	resources?: Array<{
		title?: string;
		url?: string;
		resourceType?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'resourceType';
		};
		_type: 'resource';
		_key: string;
	}>;
	badLanguage?: boolean;
	approximateReadingTime?: number;
	epigraphs?: Array<{
		text?: BlockContent;
		reference?: string;
		_type: 'epigraph';
		_key: string;
	}>;
	body?: BlockContent;
	review?: BlockContent;
	originalPublication?: string;
};

export type Author = {
	_id: string;
	_type: 'author';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: string;
	slug?: Slug;
	image?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	nationality?: {
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		[internalGroqTypeReferenceTo]?: 'nationality';
	};
	biography?: {
		es?: BlockContent;
		en?: BlockContent;
	};
	resources?: Array<{
		title?: string;
		url?: string;
		resourceType?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'resourceType';
		};
		_type: 'resource';
		_key: string;
	}>;
};

export type ResourceType = {
	_id: string;
	_type: 'resourceType';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	description?: string;
	icon?: IconPicker;
};

export type Nationality = {
	_id: string;
	_type: 'nationality';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	country?: string;
	flag?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
};

export type SanityImageCrop = {
	_type: 'sanity.imageCrop';
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
};

export type SanityImageHotspot = {
	_type: 'sanity.imageHotspot';
	x?: number;
	y?: number;
	height?: number;
	width?: number;
};

export type SanityImageAsset = {
	_id: string;
	_type: 'sanity.imageAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	metadata?: SanityImageMetadata;
	source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
	_type: 'sanity.assetSourceData';
	name?: string;
	id?: string;
	url?: string;
};

export type SanityImageMetadata = {
	_type: 'sanity.imageMetadata';
	location?: Geopoint;
	dimensions?: SanityImageDimensions;
	palette?: SanityImagePalette;
	lqip?: string;
	blurHash?: string;
	hasAlpha?: boolean;
	isOpaque?: boolean;
};

export type LandingPage = {
	_id: string;
	_type: 'landingPage';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	config?: string;
	slug?: Slug;
	active?: boolean;
	previews?: Array<{
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: 'storylist';
	}>;
	cards?: Array<{
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: 'storylist';
	}>;
};

export type Slug = {
	_type: 'slug';
	current: string;
	source?: string;
};

export type IconPicker = {
	_type: 'iconPicker';
	provider?: string;
	name?: string;
	svg?: string;
};

export type ComputedNumber = number;

export type ComputedText = string;

export type ComputedString = string;

export type ComputedBoolean = boolean;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../src/api/_queries/story.query.ts
// Variable: storiesByAuthorSlugQuery
// Query: *[_type == 'story' && author->slug.current == $slug][$start...$end]{    'slug': slug.current,    title,    language,    badLanguage,    categories,    body[0...3],    originalPublication,    approximateReadingTime,    mediaSources[]{         _id,        _type,        title,         icon        },    resources[]{         title,         url,         resourceType->{             title,             description,             'icon': {                 'name': icon.name,                 'svg': icon.svg,                 'provider': icon.provider                 }             }         },}|order(title asc)
export type StoriesByAuthorSlugQueryResult = Array<{
	slug: string;
	title: string;
	language: 'en' | 'es';
	badLanguage?: boolean;
	categories: null;
	body: Array<{
		children: Array<{
			marks?: Array<string>;
			text: string;
			_type: 'span';
			_key: string;
		}>;
		style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
		listItem?: 'bullet';
		markDefs?: Array<{
			href: string;
			_type: 'link';
			_key: string;
		}>;
		level?: number;
		_type: 'block';
		_key: string;
	}>;
	originalPublication: string;
	approximateReadingTime: number;
	mediaSources: Array<
		| {
				_id: string;
				_type: 'audioRecording';
				title: string;
				icon: string;
		  }
		| {
				_id: string;
				_type: 'spaceRecording';
				title: string;
				icon: string;
		  }
		| {
				_id: string;
				_type: 'youTubeVideo';
				title: string;
				icon: string;
		  }
	>;
	resources: Array<{
		title: string;
		url: string;
		resourceType: {
			title: string;
			description: string;
			icon:
				| {
						name: string;
						svg: string;
						provider: string;
				  }
				| undefined;
		};
	}>;
}>;

// Source: ../src/api/_queries/content.query.ts
// Variable: fetchNewestStoriesQuery
// Query: *[_type == 'story']{    _createdAt,    'slug': slug.current,    title,    language,    badLanguage,    categories,    body[0...3],    originalPublication,    approximateReadingTime,    mediaSources,    'author': author->{        slug,        name,        image,         nationality->    }}|order(_createdAt desc)[$start...$end]
export type FetchNewestStoriesQueryResult = Array<{
	_createdAt: string;
	slug: string;
	title: string;
	language: 'en' | 'es';
	badLanguage: boolean;
	categories: null;
	body: BlockContent;
	originalPublication: string;
	approximateReadingTime: number;
	mediaSources: Array<
		| {
				postId?: string;
				title?: string;
				spaceUrl?: string;
				duration?: string;
				_type: 'spaceRecording';
				_key: string;
		  }
		| {
				title?: string;
				description?: BlockContent;
				videoId?: string;
				_type: 'youTubeVideo';
				_key: string;
		  }
		| {
				title?: string;
				url?: string;
				_type: 'audioRecording';
				_key: string;
		  }
	>;
	author: {
		slug: Slug;
		name: string;
		image: {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			_type: 'image';
		};
		nationality: {
			_id: string;
			_type: 'nationality';
			_createdAt: string;
			_updatedAt: string;
			_rev: string;
			country?: string;
			flag?: {
				asset?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				_type: 'image';
			};
		};
	};
}>;

// Variable: storyBySlugQuery
// Query: *[_type == 'story' && slug.current == $slug]{  'slug': slug.current,  title,   language,  badLanguage,  epigraphs,  categories,  body,  review,  originalPublication,  approximateReadingTime,  mediaSources,  resources[]{        title,         url,         resourceType->{             title,             description,             'icon': {                'name': icon.name,                 'svg': icon.svg,                 'provider': icon.provider                 }             }   },  'author': author-> {      slug,      name,      image,      nationality->,      biography,      resources[]{         title,         url,         resourceType->{             title,             description,             'icon': {                 'name': icon.name,                 'svg': icon.svg,                 'provider': icon.provider                 }             }         }      }}[0]
export type StoryBySlugQueryResult = {
	slug: string;
	title: string;
	language: 'en' | 'es';
	badLanguage: boolean;
	epigraphs: Array<{
		text: BlockContent;
		reference: string;
		_type: 'epigraph';
		_key: string;
	}>;
	categories: null;
	body: BlockContent;
	review: BlockContent;
	originalPublication: string;
	approximateReadingTime: number;
	mediaSources: Array<
		| {
				_id: string;
				_type: 'audioRecording';
				title: string;
				icon: string;
		  }
		| {
				_id: string;
				_type: 'spaceRecording';
				title: string;
				icon: string;
		  }
		| {
				_id: string;
				_type: 'youTubeVideo';
				title: string;
				icon: string;
		  }
	>;
	resources: Array<{
		title: string;
		url: string;
		resourceType: {
			title: string;
			description: string;
			icon:
				| {
						name: string;
						svg: string;
						provider: string;
				  }
				| undefined;
		};
	}>;
	author: {
		slug: Slug;
		name: string;
		image: {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			_type: 'image';
		};
		nationality: {
			_id: string;
			_type: 'nationality';
			_createdAt: string;
			_updatedAt: string;
			_rev: string;
			country: string;
			flag: {
				asset?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				_type: 'image';
			};
		};
		biography?: {
			es: BlockContent;
			en: BlockContent;
			[language: string]: BlockContent;
		};
		resources: Array<{
			title: string;
			url: string;
			resourceType: {
				title: string;
				description: string;
				icon: {
					name: string;
					svg: string;
					provider: string;
				};
			};
		}>;
	};
};

// Source: ../src/api/_queries/author.query.ts
// Variable: authorBySlugQuery
// Query: *[_type == 'author' && slug.current == $slug][0]{    slug,    name,    image,    nationality->,    biography,    resources[]{         title,         url,         resourceType->{         	title,         	description,         	'icon': {         		'name': icon.name,         		'svg': icon.svg,         		'provider': icon.provider         		}         	}         }}
export type AuthorBySlugQueryResult = {
	slug: Slug;
	name: string;
	image: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	nationality: {
		_id: string;
		_type: 'nationality';
		_createdAt: string;
		_updatedAt: string;
		_rev: string;
		country: string;
		flag: {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			_type: 'image';
		};
	};
	biography?: {
		es: BlockContent;
		en: BlockContent;
		[language: string]: BlockContent;
	};
	resources?: Array<{
		title: string;
		url: string;
		resourceType: {
			title: string;
			description: string;
			icon: {
				name: string;
				svg: string;
				provider: string;
			};
		};
	}>;
};

// Source: ../src/api/_queries/content.query.ts
// Variable: fetchLandingPageContentQuery
// Query: *[_type == 'landingPage'] {    'previews': previews[]-> {         'slug': slug.current,        title,        description,        language,        displayDates,        editionPrefix,        comingNextLabel,        featuredImage,        'tags': tags[] -> {            title,             'slug': slug.current,             description,             'icon': {'name': icon.name, 'provider': icon.provider, 'svg': icon.svg}        },        'gridConfig': {            'gridTemplateColumns': previewGridConfig.gridTemplateColumns,            'titlePlacement': previewGridConfig.titlePlacement,            'cardsPlacement': previewGridConfig.cardsPlacement[]            {                'order': order,                'slug': publication.story->slug.current,                'startCol': startCol,                'image': image,                'imageSlug': imageSlug.current,                'endCol': endCol,                'startRow': startRow,                'endRow': endRow,                'publication': {                    'publishingOrder': publication.publishingOrder,                    'publishingDate': publication.publishingDate,                    'published': publication.published,                    'story': publication.story->{                        'slug': slug.current,                        title,                        language,                        badLanguage,                        categories,                        body[0...3],                        originalPublication,                        approximateReadingTime,                        mediaSources,                        'author': author->{                            slug,                            name,                            image,                            nationality->                        }                    }                }            }        },        'count': count(*[ _type == 'publication' && storylist._ref == ^._id ])    },    'cards': cards[]-> {         'slug': slug.current,        title,        description,        language,        displayDates,        editionPrefix,        comingNextLabel,        featuredImage,        'tags': tags[] -> {            title,             'slug': slug.current,             description,             'icon': {'name': icon.name, 'provider': icon.provider, 'svg': icon.svg}        },        'count': count(*[ _type == 'publication' && storylist._ref == ^._id ])    }}[0]
export type FetchLandingPageContentQueryResult = {
	previews: Array<{
		slug: string;
		title: string;
		description: string[];
		language: 'en' | 'es';
		displayDates: boolean;
		editionPrefix: string;
		comingNextLabel: string;
		featuredImage: {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			_type: 'image';
		};
		tags: Array<{
			title: string;
			slug: string;
			description: string;
			icon: {
				name: string;
				provider: string;
				svg: string;
			};
		}>;
		gridConfig: {
			gridTemplateColumns: string;
			titlePlacement: {
				order: number;
				startCol?: string;
				endCol?: string;
				startRow?: string;
				endRow?: string;
			};
			cardsPlacement: Array<{
				order: number;
				slug: string;
				startCol: string;
				image: {
					asset?: {
						_ref: string;
						_type: 'reference';
						_weak?: boolean;
						[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
					};
					hotspot?: SanityImageHotspot;
					crop?: SanityImageCrop;
					_type: 'image';
				};
				imageSlug: string;
				endCol: string;
				startRow: string;
				endRow: string;
				publication: {
					publishingOrder: number;
					publishingDate: string;
					published: boolean;
					editionPrefix: string;
					comingNextLabel: string;
					editionLabel: string;
					story: {
						slug: string;
						title: string;
						language: 'en' | 'es';
						badLanguage: boolean | undefined;
						categories: null;
						body: BlockContent;
						originalPublication: string;
						approximateReadingTime: number;
						mediaSources: Array<
							| {
									_id: string;
									_type: 'audioRecording';
									title: string;
									icon: string;
							  }
							| {
									_id: string;
									_type: 'spaceRecording';
									title: string;
									icon: string;
							  }
							| {
									_id: string;
									_type: 'youTubeVideo';
									title: string;
									icon: string;
							  }
						>;
						author: {
							slug: Slug;
							name: string;
							image: {
								asset?: {
									_ref: string;
									_type: 'reference';
									_weak?: boolean;
									[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
								};
								hotspot?: SanityImageHotspot;
								crop?: SanityImageCrop;
								_type: 'image';
							};
							nationality: {
								_id: string;
								_type: 'nationality';
								_createdAt: string;
								_updatedAt: string;
								_rev: string;
								country: string;
								flag: {
									asset?: {
										_ref: string;
										_type: 'reference';
										_weak?: boolean;
										[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
									};
									hotspot?: SanityImageHotspot;
									crop?: SanityImageCrop;
									_type: 'image';
								};
							};
						};
					};
				};
			}>;
		};
		count: number;
	}>;
	cards: Array<{
		slug: string;
		title: string;
		description: string[];
		language: 'en' | 'es';
		displayDates: boolean;
		editionPrefix: string;
		comingNextLabel: string;
		featuredImage: {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			_type: 'image';
		};
		tags: Array<{
			title: string;
			slug: string;
			description: string;
			icon: {
				name: string;
				provider: string;
				svg: string;
			};
		}>;
		gridConfig: {
			gridTemplateColumns: string;
			titlePlacement: {
				order: number;
				startCol?: string;
				endCol?: string;
				startRow?: string;
				endRow?: string;
			};
			cardsPlacement: Array<{
				order: number;
				slug: string;
				startCol: string;
				image: {
					asset?: {
						_ref: string;
						_type: 'reference';
						_weak?: boolean;
						[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
					};
					hotspot?: SanityImageHotspot;
					crop?: SanityImageCrop;
					_type: 'image';
				};
				imageSlug: string;
				endCol: string;
				startRow: string;
				endRow: string;
				publication: {
					publishingOrder: number;
					publishingDate: string;
					published: boolean;
					editionPrefix: string;
					comingNextLabel: string;
					editionLabel: string;
					story: {
						slug: string;
						title: string;
						language: 'en' | 'es';
						badLanguage: boolean | undefined;
						categories: null;
						body: BlockContent;
						originalPublication: string;
						approximateReadingTime: number;
						mediaSources: Array<
							| {
									_id: string;
									_type: 'audioRecording';
									title: string;
									icon: string;
							  }
							| {
									_id: string;
									_type: 'spaceRecording';
									title: string;
									icon: string;
							  }
							| {
									_id: string;
									_type: 'youTubeVideo';
									title: string;
									icon: string;
							  }
						>;
						author: {
							slug: Slug;
							name: string;
							image: {
								asset?: {
									_ref: string;
									_type: 'reference';
									_weak?: boolean;
									[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
								};
								hotspot?: SanityImageHotspot;
								crop?: SanityImageCrop;
								_type: 'image';
							};
							nationality: {
								_id: string;
								_type: 'nationality';
								_createdAt: string;
								_updatedAt: string;
								_rev: string;
								country: string;
								flag: {
									asset?: {
										_ref: string;
										_type: 'reference';
										_weak?: boolean;
										[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
									};
									hotspot?: SanityImageHotspot;
									crop?: SanityImageCrop;
									_type: 'image';
								};
							};
						};
					};
				};
			}>;
		};
		count: number;
	}>;
};

// Source: ../src/api/_queries/storylist.query.ts
// Variable: storylistPreviewQuery
// Query: *[_type == 'storylist' && slug.current == $slug][0]{     'slug': slug.current,    title,    description,    language,    displayDates,    editionPrefix,    comingNextLabel,    featuredImage,    'tags': tags[] -> {        title,         'slug': slug.current,         description,         'icon': {'name': icon.name, 'provider': icon.provider, 'svg': icon.svg}    },    'gridConfig': {     'gridTemplateColumns': previewGridConfig.gridTemplateColumns,    'titlePlacement': previewGridConfig.titlePlacement,    'cardsPlacement': previewGridConfig.cardsPlacement[]        {            'order': order,            'slug': publication.story->slug.current,            'startCol': startCol,            'image': image,            'imageSlug': imageSlug.current,            'endCol': endCol,            'startRow': startRow,            'endRow': endRow,            'publication': {                'publishingOrder': publication.publishingOrder,                'publishingDate': publication.publishingDate,                'published': publication.published,                'story': publication.story->{                    'slug': slug.current,                    title,                    language,                    badLanguage,                    categories,                    body[0...3],                    originalPublication,                    approximateReadingTime,                    mediaSources,                	'author': author->{                        slug,                        name,                        image,                        nationality->                    }                }            }        }    },    'count': count(*[ _type == 'publication' && storylist._ref == ^._id ])    }
export type StorylistPreviewQueryResult = {
	slug: string;
	title: string;
	description: string[];
	language: 'en' | 'es';
	displayDates: boolean;
	editionPrefix: string;
	comingNextLabel: string;
	featuredImage: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	tags: Array<{
		title: string;
		slug: string;
		description: string;
		icon: {
			name: string;
			provider: string;
			svg: string;
		};
	}>;
	gridConfig: {
		gridTemplateColumns: string;
		titlePlacement: {
			order: number;
			startCol?: string;
			endCol?: string;
			startRow?: string;
			endRow?: string;
		};
		cardsPlacement: Array<{
			order: number;
			slug: string;
			startCol: string;
			image: {
				asset?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				_type: 'image';
			};
			imageSlug: string;
			endCol: string;
			startRow: string;
			endRow: string;
			publication: {
				publishingOrder: number;
				publishingDate: string;
				published: boolean;
				editionPrefix: string;
				comingNextLabel: string;
				editionLabel: string;
				story: {
					slug: string;
					title: string;
					language: 'en' | 'es';
					badLanguage: boolean | undefined;
					categories: null;
					body: BlockContent;
					originalPublication: string;
					approximateReadingTime: number;
					mediaSources: Array<
						| {
								_id: string;
								_type: 'audioRecording';
								title: string;
								icon: string;
						  }
						| {
								_id: string;
								_type: 'spaceRecording';
								title: string;
								icon: string;
						  }
						| {
								_id: string;
								_type: 'youTubeVideo';
								title: string;
								icon: string;
						  }
					>;
					author: {
						slug: Slug;
						name: string;
						image: {
							asset?: {
								_ref: string;
								_type: 'reference';
								_weak?: boolean;
								[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
							};
							hotspot?: SanityImageHotspot;
							crop?: SanityImageCrop;
							_type: 'image';
						};
						nationality: {
							_id: string;
							_type: 'nationality';
							_createdAt: string;
							_updatedAt: string;
							_rev: string;
							country: string;
							flag: {
								asset?: {
									_ref: string;
									_type: 'reference';
									_weak?: boolean;
									[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
								};
								hotspot?: SanityImageHotspot;
								crop?: SanityImageCrop;
								_type: 'image';
							};
						};
					};
				};
			};
		}>;
	};
	count: number;
};

// Variable: storylistQuery
// Query: *[_type == 'storylist' && slug.current == $slug][0]{     'slug': slug.current,    title,    description,    language,    displayDates,    editionPrefix,    comingNextLabel,    featuredImage,    'tags': tags[] -> {        title,         'slug': slug.current,         description,         'icon': {'name': icon.name, 'provider': icon.provider, 'svg': icon.svg}    },    'gridConfig': {         'gridTemplateColumns': gridConfig.gridTemplateColumns,        'titlePlacement': gridConfig.titlePlacement,        'cardsPlacement': gridConfig.cardsPlacement[]        {            'order': order,            'slug': publication.story->slug.current,            'startCol': startCol,            'image': image,            'imageSlug': imageSlug.current,            'endCol': endCol,            'startRow': startRow,            'endRow': endRow,            'publication': {                'publishingOrder': publication.publishingOrder,                'publishingDate': publication.publishingDate,                'published': publication.published,                'story': publication.story->{                    'slug': slug.current,                    title,                    language,                    badLanguage,                    categories,                    body[0...3],                    originalPublication,                    approximateReadingTime,                    mediaSources,                	'author': author-> { slug, name, image, nationality-> }                }            }        }    },    'count': count(*[ _type == 'publication' && storylist._ref == ^._id ])}
export type StorylistQueryResult = {
	slug: string;
	title: string;
	description: string[];
	language: 'en' | 'es';
	displayDates: boolean;
	editionPrefix: string;
	comingNextLabel: string;
	featuredImage: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	tags: Array<{
		title: string;
		slug: string;
		description: string;
		icon: {
			name: string;
			provider: string;
			svg: string;
		};
	}>;
	gridConfig: {
		gridTemplateColumns: string;
		titlePlacement: {
			order: number;
			startCol?: string;
			endCol?: string;
			startRow?: string;
			endRow?: string;
		};
		cardsPlacement: Array<{
			order: number;
			slug: string;
			startCol: string;
			image: {
				asset?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				_type: 'image';
			};
			imageSlug: string;
			endCol: string;
			startRow: string;
			endRow: string;
			publication: {
				publishingOrder: number;
				publishingDate: string;
				published: boolean;
				editionPrefix: string;
				comingNextLabel: string;
				editionLabel: string;
				story: {
					slug: string;
					title: string;
					language: 'en' | 'es';
					badLanguage: boolean | undefined;
					categories: null;
					body: BlockContent;
					originalPublication: string;
					approximateReadingTime: number;
					mediaSources: Array<
						| {
								_id: string;
								_type: 'audioRecording';
								title: string;
								icon: string;
						  }
						| {
								_id: string;
								_type: 'spaceRecording';
								title: string;
								icon: string;
						  }
						| {
								_id: string;
								_type: 'youTubeVideo';
								title: string;
								icon: string;
						  }
					>;
					author: {
						slug: Slug;
						name: string;
						image: {
							asset?: {
								_ref: string;
								_type: 'reference';
								_weak?: boolean;
								[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
							};
							hotspot?: SanityImageHotspot;
							crop?: SanityImageCrop;
							_type: 'image';
						};
						nationality: {
							_id: string;
							_type: 'nationality';
							_createdAt: string;
							_updatedAt: string;
							_rev: string;
							country: string;
							flag: {
								asset?: {
									_ref: string;
									_type: 'reference';
									_weak?: boolean;
									[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
								};
								hotspot?: SanityImageHotspot;
								crop?: SanityImageCrop;
								_type: 'image';
							};
						};
					};
				};
			};
		}>;
	};
	count: number;
};
