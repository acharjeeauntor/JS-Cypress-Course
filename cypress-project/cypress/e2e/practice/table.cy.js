/// <reference types="cypress" />

it(`Table test`, () => {
    cy.visit("https://letcode.in/table")
    cy.get('#simpletable  tbody tr').each(($row)=>{
        cy.wrap($row).find('td').eq(1).invoke('text').then((text)=>{
            cy.log(text)
            if(text == "Raj"){
                cy.wrap($row).find('input').click()
            }
        })
    })
})
