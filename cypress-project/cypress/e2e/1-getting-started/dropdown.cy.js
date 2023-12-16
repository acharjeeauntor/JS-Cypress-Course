/// <reference types="cypress" />


    // it('selects apple',() => {
    //     cy.visit("https://letcode.in/dropdowns")
    //     cy.get('#fruits').select('Apple')
    //     //cy.get('#fruits').should('have.value',0)
    //     cy.get('#fruits').should('contain','Apple')
    //   })

    // it('selects apple',() => {
    //     cy.visit("https://letcode.in/dropdowns")
    //     cy.get('#fruits').select(['1','2']) // Value
    //     //cy.get('#fruits').select(2) // Index
    //    // cy.get('#fruits').select("Apple") // Options text
    //     //cy.get('#fruits').should('have.value',0)
    //     //cy.get('#fruits').should('contain','Apple')
    //   })


    it('selects Multi selct',() => {
        cy.visit("https://demoqa.com/select-menu")
        cy.get('#cars').select(['volvo','audi'])
      })