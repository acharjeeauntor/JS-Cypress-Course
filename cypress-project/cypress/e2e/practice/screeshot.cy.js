/// <reference types="cypress" />



it(`Screenshot`,()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      
    cy.visit("https://letcode.in/buttons")
    // cy.get('#color').should('have.css', 'background-color', 'rgb(138, 77, 118)')
    cy.screenshot('prove')
    cy.get('#color').screenshot()
    cy.get('#color').click({force:true})
    cy.get('#color').dblclick()
    cy.get('#color').rightclick()
    })
    