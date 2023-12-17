/// <reference types="cypress" />
  
it('Test Confirm Alert box',()=>{
cy.visit("https://webdriveruniversity.com/Popup-Alerts/")
cy.get("#button4").click()
cy.on('window:confirm',()=>{
return false  // true-> OK,  false->Cancel
})
})

it('Test Prompt Alert box',()=>{
    cy.visit("https://letcode.in/alert")
    cy.window().then((p)=>{
        cy.stub(p,"prompt").returns("We are Testing")
        cy.get("#prompt").click()
    })
    })