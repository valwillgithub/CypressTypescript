describe('QA Challenge Exercise API', () => {
	before(function () {
		cy.fixture('example').as('data');
	});
	it('API Exercise Create Multiple Users', function () {
		//const requestBody = [];
		cy.request({
			method: 'POST',
			url: Cypress.env('api_url') + '/user/createWithList',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: this.data,
		}).then((response) => {
			cy.log(JSON.stringify(response));
			expect(response.status).to.equal(200);
			expect(response).to.have.property('headers');
			expect(response).to.have.property('duration');
		});
	});
	//=======================================
	xit('API Exercise Create Multiple Users', () => {
		const requestBody = [
			{
				id: 111,
				username: 'james1',
				firstName: 'james',
				lastName: 'taylor',
				email: 'jt1@yahoo.com',
				password: 'Testing1',
				phone: '0203569100',
				userStatus: 1,
			},
			{
				id: 112,
				username: 'james2',
				firstName: 'james',
				lastName: 'taylor',
				email: 'jt2@yahoo.com',
				password: 'Testing1',
				phone: '0203569100',
				userStatus: 1,
			},
		];
		cy.request({
			method: 'POST',
			url: Cypress.env('api_url') + '/user/createWithList',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: requestBody,
		}).then((response) => {
			cy.log(JSON.stringify(response));
			expect(response.status).to.equal(200);
			// expect(response).to.have.property('headers');
			// expect(response).to.have.property('duration');
			//expect(response.body).to.have.property('message', '105');
			//expect(response).to.have.property('nana');
		});
	});
});
