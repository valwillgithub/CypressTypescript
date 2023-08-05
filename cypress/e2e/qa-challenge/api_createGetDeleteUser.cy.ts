describe('QA Challenge Exercise API', () => {
	let num: number = Math.floor(Math.random() * 1000);
	let testEmail: string = 'james' + num + '@mail.com';
	let userName: string = 'james' + num;
	it('API Exercise Create A Single User', () => {
		cy.log(`${num} ${userName} ${testEmail}`);
		cy.log(testEmail);
		cy.request({
			method: 'POST',
			url: Cypress.env('api_url') + '/user',

			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: {
				id: num,
				username: userName,
				firstName: 'james',
				lastName: 'taylor',
				email: testEmail,
				password: 'Testing1',
				phone: '0203569100',
				userStatus: '1',
			},
		}).then((response) => {
			cy.log(JSON.stringify(response));
			expect(response.status).to.equal(200);
			expect(response).to.have.property('headers');
			expect(response).to.have.property('duration');
		});
	});

	it('API Exercise Get User By Username', () => {
		cy.request('GET', Cypress.env('api_url') + `/user/${userName}`).then(
			(response) => {
				cy.log(JSON.stringify(response));
				expect(response.status).to.equal(200);
				expect(response.body).to.have.property('id', num);
				expect(response.body).to.have.property('username', userName);
				expect(response.body).to.have.property('email', testEmail);
			}
		);
	});

	it('API Exercise Delete A User', () => {
		cy.request('DELETE', Cypress.env('api_url') + `/user/${userName}`)
			.then((response) => {
				cy.log(JSON.stringify(response));
				expect(response.status).to.equal(200);
				expect(response.body).to.have.property('message', userName);
			})
			.then(() => {
				cy.request({
					method: 'GET',
					url: Cypress.env('api_url') + `/user/${userName}`,
					failOnStatusCode: false,
				}).then((res) => {
					expect(res.status).to.equal(404);
					expect(res.body).to.have.property('message', 'User not found');
				});
			});
	});
});
