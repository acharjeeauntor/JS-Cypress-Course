/// <reference types="cypress" />

before(function(){
cy.fixture("example").as("testData")
cy.fixture('data1').as("info")
})

it(`Basic Fixture`,function(){
    cy.visit("https://letcode.in/edit")
    cy.log(this.testData.name)
    cy.log(this.testData.email)
    cy.log(this.testData.body)
    cy.log(this.info.name)
    })
    