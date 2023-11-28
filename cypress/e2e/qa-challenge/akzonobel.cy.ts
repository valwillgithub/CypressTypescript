describe('Akzonobel test', () => {
  function getCurrentDateTimeString() {
    const now = new Date();
    return now.toISOString();
  }
  let dateValue1 = getCurrentDateTimeString();

  const cookies = [
    {
      name: 'OptanonAlertBoxClosed',
      value: dateValue1,
      path: '/',
      domain: '.www.akzonobel.com',
    },
    {
      name: '_fbp',
      value: 'fb.1.1700357603094.633914534',
      path: '/',
      domain: '.akzonobel.com',
    },
    {
      name: '_gid',
      value: 'GA1.2.519435050.1700357603',
      path: '/',
      domain: '.akzonobel.com',
    },
    {
      name: '_ga',
      value: 'GA1.2.296688581.1700357603',
      path: '/',
      domain: '.akzonobel.com',
    },
  ];
  it('Print headings', () => {
    cy.visit('https://www.akzonobel.com/en/media');
    cookies.forEach((cookie) => {
      cy.setCookie(cookie.name, cookie.value, {
        path: cookie.path,
        domain: cookie.domain,
      });
    });
    //cy.get('#onetrust-accept-btn-handler').click();
    cy.get("[class='navigation-menu js-root-menu'] >li").each(
      ($element, index, $list) => {
        // Log the text of each element
        const text = $element.text().trim();
        //cy.log(`Element ${index + 1} Text: ${text}`);
        cy.log(text);
      }
    );
  });

  //   it('Print headings 2', () => {
  //     cy.visit('https://www.akzonobel.com/en/media');
  //     cy.get("[class='navigation-menu js-root-menu']").within(() => {
  //       cy.get('li').each(($el) => {
  //         let rc = $el.text();
  //         cy.log(rc);
  //       });
  //     });
  //   });

  //   it.only('Print headings 3', () => {
  //     cy.visit('https://www.akzonobel.com/en/media');
  //     cy.get("[class='navigation-menu js-root-menu'] >li").each(($element, index, $list) => {
  //       // Log the text of each element
  //       const text = $element.text().trim();
  //       cy.log(`Element ${index + 1} Text: ${text}`);
  //     });
  //   })
}); //describe
