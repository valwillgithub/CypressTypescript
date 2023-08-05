describe('QA Challenge Exercise UI', () => {
	beforeEach(() => {
		cy.setCookie('notice_behaviour', 'expressed,eu');
		cy.setCookie('notice_gdpr_prefs', '0,1,2:');
		//cy.setCookie('notice_preferences', '0:');
	});
	it('UI Exercise', () => {
		const columnHeadings: string[] = [
			'Industries',
			'Capabilities',
			'BCG X',
			'Featured Insights',
			'Careers',
			'About',
		];
		cy.visit(Cypress.env('web_url'));
		columnHeadings.forEach((value: string, index: number) => {
			cy.get('div.wrapper ul.topbar__navLinks a.topbar__navLinks--a')
				.eq(index)
				.should('contain.text', value);
		});
	});

	it('UI Exercise 2', () => {
		const columnHeadings: string[] = [
			'Industries',
			'Capabilities',
			'BCG X',
			'Featured Insights',
			'Careers',
			'About',
		];
		cy.visit(Cypress.env('web_url'));
		cy.get('div.wrapper ul.topbar__navLinks a.topbar__navLinks--a').each(
			($el) => {
				let val = $el.text();
				cy.log(val);
				expect(val).to.be.oneOf(columnHeadings);
			}
		);
	});
});
