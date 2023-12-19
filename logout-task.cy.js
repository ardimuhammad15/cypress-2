/// <reference types="cypress" />

describe('Login/Logout Test', function () {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()
	})
	it('Should logout from the application', () => {
        cy.fixture("user").then((user) => {
            const username = user.username;
            const password = user.password;
            cy.get("#user_login").clear();
            cy.get("#user_login").type(username);
            cy.get('input[name="user_password"]').clear();
            cy.get('input[name="user_password"]').type(password);
            cy.get('input[name="submit"]').click()

            cy.contains('username').click()
		    cy.get('#logout_link').click()
		    cy.get('#signin_button').should('contain.text', 'Signin')
	    })
    })
})
