describe('Akzonobel test', () => {
	it('Print headings', () => {
		cy.visit('https://www.akzonobel.com/en/media');
		cy.get("[class='navigation-menu js-root-menu']")
			.find('li')
			.each(($el) => {
				let val = $el.text();
				cy.log(val);
			});
	});

	it.only('Print headings2', () => {
		cy.visit('https://www.akzonobel.com/en/media');
		cy.get("[class='navigation-menu js-root-menu']").within(() => {
			cy.get('li').each(($el) => {
				let rc = $el.text();
				cy.log(rc);
			});
		});
	});
}); //describe
