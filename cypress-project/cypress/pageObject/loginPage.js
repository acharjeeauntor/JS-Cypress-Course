/// <reference types="cypress"/>

class LoginPage{
    userNameAndPassInputSelector = `.input_error`
    loginBtnSelector = `.submit-button`


    goToLoginPage(url){
        cy.visit(url)
    }

    loginToTheApplication(name,pass){
        cy.get(this.userNameAndPassInputSelector).first().type(name)
        cy.get(this.userNameAndPassInputSelector).last().type(pass)
        cy.get(this.loginBtnSelector).click()
    }
}

module.exports = new LoginPage()

