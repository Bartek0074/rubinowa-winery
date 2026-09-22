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
					type: 'string',
					validation: (Rule) => Rule.required().max(50),
				}),
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
