/// <reference types="cypress" />

describe('Navbar Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})
	it('Should display online banking', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#onlineBankingMenu').click()
		cy.get('h3').should(
			'contain.text',
			'Our Bank is trusted by over 1,000,000 customers world wide.'
		)
	})
	it('Should display feedback content', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#feedback').click()
		cy.get('#name').should('be.visible')
	})
	it('Should display homepage content', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#feedback').click()
		cy.contains('Zero Bank').click()
		cy.get('#online-banking').should('contain.text', 'More Services')
	})
})
