import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'homePage',
	title: 'Strona Główna',
	type: 'document',
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
		{
			name: 'content',
			title: 'Treść',
			default: true,
		},
	],

	fields: [
		defineField({
			name: 'seo',
			title: 'SEO',
			type: 'object',
			group: 'seo',
			fields: [
				defineField({
					name: 'title',
					title: 'Meta title',
					type: 'string',
					validation: (Rule) => Rule.required().max(80),
				}),
				defineField({
					name: 'desc',
					title: 'Meta description',
					type: 'string',
					validation: (Rule) => Rule.required().max(160),
				}),
			],
		}),

		defineField({
			name: 'heroSection',
			title: 'Sekcja Hero',
			type: 'object',
			group: 'content',
			validation: (Rule) => Rule.required(),
			fields: [
				defineField({
					name: 'heading',
					title: 'Nagłówek',
					type: 'object',
					validation: (Rule) => Rule.required(),
					fields: [
						defineField({
							name: 'lineOne',
							title: 'Linia 1',
							type: 'string',
							validation: (Rule) => Rule.required().max(25),
						}),

						defineField({
							name: 'lineTwo',
							title: 'Linia 2',
							type: 'object',
							validation: (Rule) => Rule.required(),
							fields: [
								defineField({
									name: 'fixed',
									title: 'Tekst stały',
									type: 'string',
									validation: (Rule) => Rule.required().max(10),
								}),

								defineField({
									name: 'rotating',
									title: 'Tekst zmienny',
									type: 'array',
									of: [
										{
											type: 'string',
											validation: (Rule) => Rule.required().max(15),
										},
									],
									validation: (Rule) => Rule.required().min(3).max(5),
								}),
							],
						}),
					],
				}),

				defineField({
					name: 'cta',
					title: 'Przycisk CTA',
					type: 'object',
					validation: (Rule) => Rule.required(),
					fields: [
						defineField({
							name: 'label',
							title: 'Tekst',
							type: 'string',
							validation: (Rule) => Rule.required().max(25),
						}),
						defineField({
							name: 'url',
							title: 'URL',
							type: 'url',
							validation: (Rule) =>
								Rule.required().uri({ allowRelative: true }),
						}),
					],
				}),
			],
		}),

		defineField({
			name: 'introSection',
			title: 'Sekcja Intro',
			type: 'object',
			group: 'content',
			validation: (Rule) => Rule.required(),
			fields: [
				defineField({
					name: 'heading',
					title: 'Nagłówek',
					type: 'string',
					validation: (Rule) => Rule.required().max(50),
				}),
				defineField({
					name: 'text',
					title: 'Tekst',
					type: 'text',
					validation: (Rule) => Rule.required().max(250),
				}),
			],
		}),

		defineField({
			name: 'discoverSections',
			title: 'Sekcje Discover',
			type: 'array',
			group: 'content',
			validation: (Rule) => Rule.required().min(3).max(3),
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'heading',
							title: 'Nagłówek',
							type: 'string',
							validation: (Rule) => Rule.required().max(15),
						}),
						defineField({
							name: 'text',
							title: 'Tekst',
							type: 'text',
							validation: (Rule) => Rule.required().max(30),
						}),

						defineField({
							name: 'image',
							title: 'Obraz',
							type: 'image',
							validation: (Rule) => Rule.required(),
						}),

						defineField({
							name: 'cta',
							title: 'Przycisk CTA',
							type: 'object',
							validation: (Rule) => Rule.required(),
							fields: [
								defineField({
									name: 'label',
									title: 'Tekst',
									type: 'string',
									validation: (Rule) => Rule.required().max(25),
								}),
								defineField({
									name: 'url',
									title: 'URL',
									type: 'url',
									validation: (Rule) =>
										Rule.required().uri({ allowRelative: true }),
								}),
							],
						}),
					],
				},
			],
		}),
	],

	preview: {
		prepare() {
			return {
				title: 'Strona Główna',
			};
		},
	},
});
