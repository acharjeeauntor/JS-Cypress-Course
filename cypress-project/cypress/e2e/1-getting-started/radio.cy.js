/// <reference types="cypress" />

it(`Basic Commands for CY`,()=>{
    cy.visit("")
    cy.get('[type="radio"]').check('bread')
    })
    