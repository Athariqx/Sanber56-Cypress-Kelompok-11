// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('register_fullname', (firstname,lastname) => {
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
            //untuk isi first dan lastname
})
Cypress.Commands.add('customerLogin', (useremail,userpass) => {
    cy.get('#email').clear().type(useremail)
    cy.get('#pass').clear().type(userpass)

    cy.get('#send2').click()
})
Cypress.Commands.add('customerVerify', (elemen,textnya) => {
    cy.get(elemen)
    .should('contain.text',textnya)
})


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })