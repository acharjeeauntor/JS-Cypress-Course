/// <reference types="cypress" />

before(function () {
    cy.fixture('data1').as("info")
})


it(`Basic Fixture - pass login`, function () {
    const data = this.info.correct_info
    cy.loginToTheAppliation(data.email,data.password)
        // Assertion for pass/correct login
})

it(`Basic Fixture - failed login`, function () {
    const data = this.info.test_data
    for (var i = 0; i < data.length; i++) {
        cy.loginToTheAppliation(data[i].email,data[i].password)
        // Assertion for error/failed login
    }
})






