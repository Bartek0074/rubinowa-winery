import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Winnica Rubinowa')
		.items([
			S.listItem()
				.title('Strony')
				.child(
					S.list()
						.title('Strony')
						.items([
							S.listItem()
								.title('Strona Główna')
								.child(S.documentTypeList('homePage')),
						]),
				),
		]);
