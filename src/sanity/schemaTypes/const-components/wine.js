import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'wine',
	title: 'Wino',
	type: 'document',
	fields: [
		defineField({
			name: 'supabaseId',
			title: 'ID',
			type: 'string',
			validation: (Rule) => Rule.required(),
			description: 'ID z panelu admina. Wartość musi być unikalna, nie może się powtarzać w innych winach!',
		}),

		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: (doc) => `${doc.name}-${doc.vintage}`,
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
			description:
				'Slug używany w URL. Najlepiej zgodny z nazwą wina np. "rubin-2021". Nie powinien zawierać polskich znaków. Nie używaj spacji ani znaków specjalnych. Wartość musi być unikalna, nie może się powtarzać w innych winach.',
		}),

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
