import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I navigate to BCG homepage$/, () => {
  cy.setCookie('notice_behaviour', 'expressed,eu');
  cy.setCookie('notice_gdpr_prefs', '0,1,2:');
  cy.visit(Cypress.env('web_url'));
  cy.log('valllooo is in the hasss');
  //cy.visit('https://www.bcg.com/');
});

Then(/^Verify the column headings$/, () => {
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
