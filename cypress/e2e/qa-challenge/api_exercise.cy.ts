describe('QA Challenge Exercise API', () => {
	xit('API Exercise Get Pet By ID', () => {
		cy.request({
			method: 'GET',
			url: Cypress.env('api_url') + '/pet/9222968140497184000',
		}).then((response) => {
			expect(response.status).to.equal(200);
		});
	});

	it('API Exercise Get Pet By Status', () => {
		const queryParams = {
			status: 'available',
		};
		cy.request({
			method: 'GET',
			url: Cypress.env('api_url') + '/pet/findByStatus',
			qs: queryParams,
		}).then((response) => {
			expect(response.status).to.equal(200);
			expect(response).to.have.property('headers');
			expect(response).to.have.property('duration');
			expect(response.body).to.have.length.greaterThan(200);
			//expect(response).to.have.property('nana');
		});
	});
});
