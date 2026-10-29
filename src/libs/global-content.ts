export const hardcodedContent = {
	routes: {
		about: 'O nas',
		vineyard: 'Winnica',
		wines: 'Wina',
		blog: 'Blog',
		contact: 'Kontakt',
		adminWines: 'Wina',
	},
	messages: {
		login: {
			error: {
				invalidEmail: 'Adres email jest nieprawidłowy.',
				somethingWentWrong: 'Coś poszło nie tak. Spróbuj ponownie później.',
			},
			success: {
				emailSent: (email: string) => `Email został wysłany na adres ${email}.`,
			},
		},
		logout: {
			error: {
				somethingWentWrong: 'Coś poszło nie tak. Spróbuj ponownie później.',
			},
		},
	},
	organisms: {
		dataTable: {
			emptyMessage: 'Brak danych do wyświetlenia.',
			errorMessage: 'Wystąpił błąd podczas ładowania danych.',
		},
	},
	forms: {
		wineForm: {
			name: {
				label: 'Nazwa',
			},
			vintage: {
				label: 'Rocznik',
			},
			price: {
				label: 'Cena [zł]',
			},
			volume_ml: {
				label: 'Pojemność [ml]',
			},
			editButton: 'Edytuj',
			addButton: 'Dodaj',
		},
	},
	pages: {
		site: {},
		admin: {
			loginPage: {
				email: 'Email',
				login: 'Zaloguj się',
			},
			winesPage: {
				title: 'Wina',
				addWine: 'Dodaj wino',
				fetchError: 'Nie udało się pobrać danych.',
				table: {
					name: 'Nazwa',
					vintage: 'Rocznik',
					price: 'Cena',
					volume: 'Pojemność',
					isMatched: 'Dane marketingowe',
					isMatchedStatus: {
						yes: 'Tak',
						no: 'Nie',
					},
					actions: 'Akcje',
					view: 'Podgląd',
				},
			},
			winePage: {
				salesSection: {
					title: 'Dane handlowe',
					edit: 'Edytuj',
					volume: 'Pojemność',
					price: 'Cena',
				},
				marketingSection: {
					title: 'Dane marketingowe',
					edit: 'Edytuj',
					create: 'Utwórz',
					volume: 'Pojemność',
					alert: {
						title: 'Brak danych marketingowych.',
						description:
							'Nie znaleziono powiązanych danych marketingowych dla tego wina. Brak tych danych uniemożliwia wyświetlenie i sprzedaż wina na stronie. Utwórz dane w Studio korzystając z przycisku powyżej.',
					},
				},
			},
			newWinePage: {
				title: 'Nowe wino',
			},
			editWinePage: {
				title: 'Edycja wina',
			},
		},
	},
};
