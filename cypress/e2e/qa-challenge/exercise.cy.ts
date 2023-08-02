describe('QA Challenge Exercise', () => {
	beforeEach(() => {
		cy.setCookie('notice_behaviour', 'expressed,eu');
		cy.setCookie('notice_gdpr_prefs', '0,1,2:');
		//cy.setCookie('notice_preferences', '0:');
	});
	xit('UI Exercise', () => {
		const columnHeadings: string[] = [
			'Industries',
			'Capabilities',
			'BCG X',
			'Featured Insights',
			'Careers',
			'AboutVal',
		];
		cy.visit('https://www.bcg.com');
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
			'AboutVal',
		];
		cy.visit('https://www.bcg.com');
		cy.get('div.wrapper ul.topbar__navLinks a.topbar__navLinks--a').each(
			($el) => {
				let val = $el.text();
				cy.log(val);
				expect(val).to.be.oneOf(columnHeadings);
			}
		);
	});
	/* ==== Test Created with Cypress Studio ==== */
	xit('bcg', function () {
		/* ==== Generated with Cypress Studio ==== */
		cy.visit('www.bcg.com');
		cy.get(
			'.wrapper > #topbar > section.row > .col-xs-12 > .row > .col-xs-11 > .topbar__nav > .topbar__navLinks > :nth-child(3) > .topbar__navLinks--a'
		).click();
		cy.get(
			'.hover-on > .topbar__dropdown > :nth-child(8) > #Digital\\,\\ Technology\\,\\ and\\ Data'
		).click();
		cy.get(':nth-child(1) > .icon-nav-menu-bcg-logo').click();
		cy.get(
			'.wrapper > #topbar > section.row > .col-xs-12 > .row > .col-xs-11 > .topbar__nav > .topbar__navLinks > :nth-child(5) > .topbar__navLinks--a'
		).click();
		/* ==== End Cypress Studio ==== */
	});
});
