/// <reference types="cypress" />
import { faker } from "@faker-js/faker"

describe('APT HTTP Request', () => {
    const baseURL = "https://simple-books-api.glitch.me"
    let bookID;
    let accessToken;
    let orderID;
    let updatedCustomerName;


    it('API Status', () => {
        cy.request({
            method: "GET",
            url: `${baseURL}/status`
        }).then((res) => {
            expect(res.status).equal(200)
            expect(res.body.status).equal("OK")
        })
    })

    it('List of Books API', () => {
        const bookType = "fiction"
        cy.request({
            method: "GET",
            url: `${baseURL}/books?type=${bookType}&available=true`
        }).then((res) => {
            expect(res.status).equal(200)
            const arrayofBook = res.body
            bookID = arrayofBook[1].id
            for (var i = 0; i < arrayofBook.length; i++) {
                expect(arrayofBook[i].type).equal(bookType)
                expect(arrayofBook[i].available).equal(true)
            }
        })
    })

    it('Get a Single Book API', () => {
        cy.request({
            method: "GET",
            url: `${baseURL}/books/${bookID}`
        }).then((res) => {
            expect(res.status).equal(200)
            expect(res.body.type).equal("fiction")
        })
    })

    it('Request API Client API', () => {
        const fakeName = faker.internet.userName()
        const fakeEmail = faker.internet.email()

        // const objOfBody = {
        //     clientName: fakeName,
        //     clientEmail: fakeEmail
        // }

        cy.request({
            method: "POST",
            url: `${baseURL}/api-clients`,
            body:{
                clientName: fakeName,
                clientEmail: fakeEmail
            }

        }).then((res) => {
            expect(res.status).equal(201)
           accessToken = res.body.accessToken
        })
    })


    it('Submit an order API', () => {
        const fakeName = faker.internet.userName()

        cy.request({
            method: "POST",
            url: `${baseURL}/orders`,
            headers:{
                Authorization:`Bearer ${accessToken}`
            },
            body:{
                bookId: bookID,
                customerName: fakeName
            }

        }).then((res) => {
            expect(res.status).equal(201)
            expect(res.body.created).equal(true)
            orderID = res.body.orderId
        })
    })

    it('Update an order API', () => {
        updatedCustomerName = faker.internet.userName()

        cy.request({
            method: "PATCH",
            url: `${baseURL}/orders/${orderID}`,
            headers:{
                Authorization:`Bearer ${accessToken}`
            },
            body:{
                customerName: updatedCustomerName
            }

        }).then((res) => {
            expect(res.status).equal(204)
        })
    })

    it('Get an order API To verify the Update API', () => {
        cy.request({
            method: "GET",
            url: `${baseURL}/orders/${orderID}`,
            headers:{
                Authorization:`Bearer ${accessToken}`
            }

        }).then((res) => {
            expect(res.status).equal(200)
            expect(res.body.customerName).equal(updatedCustomerName)
        })
    })

    it('Delete an order API', () => {  
        cy.request({
            method: "DELETE",
            url: `${baseURL}/orders/${orderID}`,
            headers:{
                Authorization:`Bearer ${accessToken}`
            }

        }).then((res) => {
            expect(res.status).equal(204)
        })
    })

    it('Get an order API To verify the Delete API', () => {
        cy.request({
            method: "GET",
            url: `${baseURL}/orders/${orderID}`,
            headers:{
                Authorization:`Bearer ${accessToken}`
            },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).equal(404)
        })
    })

})