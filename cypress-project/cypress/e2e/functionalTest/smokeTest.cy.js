/// <reference types="cypress"/>
import loginPage from "../../pageObject/loginPage"
import productPage from "../../pageObject/productPage"

describe(`This Suite is refer for Somke test`,()=>{
   const url = Cypress.env('baseurl')
   const uname = Cypress.env('username')
   const pass = Cypress.env('password')


    before(function(){
        cy.fixture("loginData").as("logData")
        cy.fixture('productsData').as("proData")
        })

    it(`Login To the appliation test`,function(){
        // Test steps
        loginPage.goToLoginPage(url)
        loginPage.loginToTheApplication(uname,pass)

        // Assertion
        cy.get(productPage.titleSelector).should('have.text',this.proData.title)
    })
})