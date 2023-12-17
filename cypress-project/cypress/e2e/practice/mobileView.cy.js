/// <reference types="cypress" />

it(`Basic VIEW PORT FOR MOBILE VIEW TEST`,()=>{
    cy.viewport('iphone-8','landscape')
    cy.visit("https://letcode.in/edit")
    })
    