/// <reference types="cypress" />

describe('Searchbox Test', function() { 
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });
    it('Should show search result page', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('online {enter}')
        cy.get('h2').should('contain.text', 'Search Results:')
    });
    it('Should show search result page Zero - Free Access to Online Banking', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('online {enter}')
        cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
    });
    it('Should show search result page Zero - Online Statements', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('online {enter}')
        cy.get('a').should('contain.text', 'Zero - Online Statements')
    });
});