/// <reference types="cypress" />

before(()=>{
    cy.log("This will call before all desc of desc 1 and desc 2")
})
after(()=>{
    cy.log("This will call after all desc of desc 1 and desc 2")
})
beforeEach(()=>{
    cy.log("This will call before each desc")
})
afterEach(()=>{
    cy.log("This will call after each desc")
})


describe('This is desc 1', () => {
    before(()=>{
        cy.log("This will call before all test of desc 1")
    })
    after(()=>{
        cy.log("This will call after all test of desc 1")
    })
    beforeEach(()=>{
        cy.log("This will call before each test of desc 1")
    })
    afterEach(()=>{
        cy.log("This will call after each test of desc 1")
    })

    it('The desc 1 test 1',()=>{
        cy.log("The desc 1 test 1")
    })

    it('The desc 1 test 2',()=>{
        cy.log("The desc 1 test 2")
    })

});

describe('This is desc 2', () => {
    before(()=>{
        cy.log("This will call before all test of desc 2")
    })
    after(()=>{
        cy.log("This will call after all test of desc 2")
    })
    beforeEach(()=>{
        cy.log("This will call before each test of desc 2")
    })
    afterEach(()=>{
        cy.log("This will call after each test of desc 2")
    })

    it('The desc 2 test 1',()=>{
        cy.log("The desc 2 test 1")
    })

    it('The desc 2 test 2',()=>{
        cy.log("The desc 2 test 2")
    })

});