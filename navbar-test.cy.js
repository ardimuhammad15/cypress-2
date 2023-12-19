/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should display online banking', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#onlineBankingMenu').click()
        cy.get('h1').should('be.visible')
    });
    it('Should display feedback content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
    });
    it('Should display homepage content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#feedback').click()
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });
})