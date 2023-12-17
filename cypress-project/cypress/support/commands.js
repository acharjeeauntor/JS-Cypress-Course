// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a Login command --
Cypress.Commands.add("loginToTheAppliation",(email12,pass12)=>{
    cy.visit("https://letcode.in/signin")
    cy.log(email12)
    cy.log(pass12)
    cy.get('[placeholder="Enter registered email"]').eq(0).type(email12)
    cy.get('[placeholder="Enter password"]').type(pass12)
    cy.contains("LOGIN").click()
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })