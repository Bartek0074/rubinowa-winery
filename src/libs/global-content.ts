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
			}
		},
		logout: {
			error: {
				somethingWentWrong: 'Coś poszło nie tak. Spróbuj ponownie później.',
			}
		}
	},
	organisms: {
		dataTable: {
			emptyMessage: 'Brak danych do wyświetlenia.',
			errorMessage: 'Wystąpił błąd podczas ładowania danych.',
		}
	},
	pages: {
		site: {

		},
		admin: {
			loginPage: {
				email: 'Email',
				login: "Zaloguj się"
			}	
		}
	}
};
