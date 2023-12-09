/// <reference types="cypress" />

it(`Basic Commands for CY`,()=>{
    // cy.get('#fullName')
    // cy.visit()
    // cy.wait(5000)
    // cy.wait(alias) ------
    // cy.on()
    // cy.get().contains()
    // cy.clear()
    // cy.click()
    // cy.url()
    // cy.get().type()
    // cy.should()
    // cy.dblclick()
    // cy.get().eq()
    // cy.get().first().click()
    // cy.get().last()
    // cy.get().select()
    // cy.title()
    // cy.check().uncheck()
    // cy.scrollTo()
    // cy.selectFile()
    // cy.exec("pwd")
    // cy.getAllLocalStorage().filter()
    // cy.go('forward').go('back')
    // cy.log("Printing")
    // cy.pause()
    // cy.readFile()
    // cy.reload()
    // cy.request()
    // cy.screenshot()


    // cy.setCookie() --
    // cy.viewport() --
    // cy.writeFile() --
    // cy.wrap() --
    // cy.invoke() --

//     cy.get("#firt_name1").type("sdhjdhjg")
//     cy.get("#firt_name1").clear()

//     cy.get("#firt_name1").click()




//     cy.get("#firt_name1").as('fisrt')


// cy.get('@first').type("sjgesjd")



//     cy.wait(5000)
//      // or
//     cy.wait('@first').contains('Enter your name')


// Two types of Assertions: implicit , explicit
cy.visit("https://letcode.in/edit")
cy.get('#dontwrite').should('have.value','This text is readonly').and('have.class','input').and('have.attr','type')
cy.get('div .card-header-title').should('have.text',' Insight ')

cy.get('div .card-header-title').as('input')
cy.get("@input").then(function(e){
    const valueOfInput = e.text()
    expect(valueOfInput).to.contains("Insight")
})


})
