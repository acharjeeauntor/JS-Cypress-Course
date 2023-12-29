/// <reference types="cypress" />

it(`download test`, () => {
    cy.visit("https://letcode.in/file")
    cy.get('#xls').click()
    cy.wait(3000)
    cy.readFile('cypress/downloads/sample.xlsx').should('exist')
})
