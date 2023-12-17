/// <reference types="cypress" />

before(function () {
    cy.fixture('data1').as("info")
})


it(`Basic Fixture - pass login`, function () {
    const data = this.info.correct_info
    cy.log(data)
        cy.visit("https://letcode.in/signin")
        cy.log(data.email)
        cy.log(data.password)
        cy.get('[placeholder="Enter registered email"]').eq(0).type(data.email)
        cy.get('[placeholder="Enter password"]').type(data.password)
        cy.contains("LOGIN").click()
        // Assertion for pass/correct login
})

it(`Basic Fixture - failed login`, function () {
    const data = this.info.test_data
    cy.log(data)
    for (var i = 0; i < data.length; i++) {
        cy.visit("https://letcode.in/signin")
        cy.log(data[i].email)
        cy.log(data[i].password)
        cy.get('[placeholder="Enter registered email"]').eq(0).type(data[i].email)
        cy.get('[placeholder="Enter password"]').type(data[i].password)
        cy.contains("LOGIN").click()
        // Assertion for error/failed login
    }
})






