import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'wine',
	title: 'Wino',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Nazwa',
			type: 'string',
			validation: (Rule) => Rule.required().min(3).max(50),
		}),

		defineField({
			name: 'vintage',
			title: 'Rocznik',
			type: 'string',
			validation: (Rule) => Rule.required().min(4).max(4),
		}),

		defineField({
			name: 'volume',
			title: 'Pojemność',
			type: 'string',
			validation: (Rule) => Rule.required().min(1).max(10),
		}),

		defineField({
			name: 'image',
			title: 'Wine Image',
			type: 'image',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
					validation: (Rule) => Rule.required().min(3).max(100),
				}),
			],
		}),
	],

	preview: {
		select: {
			name: 'name',
			vintage: 'vintage',
			media: 'image',
		},
		prepare: ({ name, vintage, media }) => ({
			title: `${name} ${vintage}`,
			media,
		}),
	},
});
