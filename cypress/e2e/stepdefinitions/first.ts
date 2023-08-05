import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to BCG homepage', () => {
	cy.setCookie('notice_behaviour', 'expressed,eu');
	cy.setCookie('notice_gdpr_prefs', '0,1,2:');
	cy.visit(Cypress.env('web_url'));
});

Then('Verify the column headings', () => {
	const columnHeadings: string[] = [
		'Industries',
		'Capabilities',
		'BCG X',
		'Featured Insights',
		'Careers',
		'About',
	];
	columnHeadings.forEach((value: string, index: number) => {
		cy.get('div.wrapper ul.topbar__navLinks a.topbar__navLinks--a')
			.eq(index)
			.should('contain.text', value);
	});
});
