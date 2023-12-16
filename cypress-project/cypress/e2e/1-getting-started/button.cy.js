/// <reference types="cypress" />



it(`Basic Commands for CY`,()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      
    cy.visit("https://letcode.in/buttons")
    // cy.get('#color').should('have.css', 'background-color', 'rgb(138, 77, 118)')
    cy.get('#color').click({force:true})
    cy.get('#color').dblclick()
    cy.get('#color').rightclick()
    })
    