/// <reference types="cypress" />
it('Intercept API Response',function(){
cy.visit("https://dummyapi.io/explorer")
cy.intercept({
    path:"/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
}).as("comments")

cy.get(".flex > :nth-child(5)").click()
cy.wait('@comments').then(abc=>{
    expect(abc.response.statusCode).equal(200)
    expect(abc.response.body.limit).equal(10)
})
})

it('Mock/Stub API Response',function(){
    cy.visit("https://dummyapi.io/explorer")
    cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{abc:'abc',posts:50}).as("comments")
    cy.get(".flex > :nth-child(5)").click()
    cy.wait('@comments').then(abc=>{
        expect(abc.response.statusCode).equal(200)
        expect(abc.response.body.posts).equal(50)
    })
    })