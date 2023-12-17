// Smoke - 2 tc
// Full tc  - 5 TC
/// <reference types="cypress" />


it('selects apple 1', () => {
    cy.visit("https://letcode.in/dropdowns")
    cy.get('#fruits').select('Apple')
    //cy.get('#fruits').should('have.value',0)
    cy.get('#fruits').should('contain', 'Apple')
})

it('selects apple 2', () => {
    //tag: smoke
    cy.visit("https://letcode.in/dropdowns")
    cy.get('#fruits').select(['1', '2']) // Value
    //cy.get('#fruits').select(2) // Index
    // cy.get('#fruits').select("Apple") // Options text
    //cy.get('#fruits').should('have.value',0)
    //cy.get('#fruits').should('contain','Apple')
})


it('selects Multi selct 3', () => {
    cy.visit("https://demoqa.com/select-menu")
    cy.get('#cars').select(['volvo', 'audi'])
})


it('Test Confirm Alert box 4', () => {

    //tag: smoke

    cy.visit("https://webdriveruniversity.com/Popup-Alerts/")
    cy.get("#button4").click()
    cy.on('window:confirm', () => {
        return false  // true-> OK,  false->Cancel
    })
})

it('Test Prompt Alert box 5', () => {
    cy.visit("https://letcode.in/alert")
    cy.window().then((p) => {
        cy.stub(p, "prompt").returns("We are Testing")
        cy.get("#prompt").click()
    })
})