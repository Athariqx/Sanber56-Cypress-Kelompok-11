
import myaccountPage from "../support/pageObject/myaccountPOM"

function base_url() {
  cy.visit('/')
  cy.get('.logo > img')
  cy.get('.panel > .header > .authorization-link > a').click()
  cy.title('eq','Customer Login')
  cy.fixture('usersCreated.json').then((users) => {
    const datauser = users[0];
    cy.get('#email').type(datauser.username)
    cy.get('#pass').type(datauser.password)
    cy.get('#send2').click()
    
   })
   cy.wait(5000)
   cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
   cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
   cy.title('eq','My Account')
   cy.get('.box-billing-address > .box-actions > .action > span').click()
   cy.get('.base').should('contain.text','Edit Address')
}

describe('template spec', () => {
  beforeEach(() => {
    base_url()
  });


   it('Edit Address Positive', () => {
    cy.get(myaccountPage.telephone).clear().type('089765412321')
    cy.get(myaccountPage.street_1).clear().type('Anggerk')
    cy.get(myaccountPage.city).clear().type('Jakarta')
    cy.get(myaccountPage.zip).clear().type('12240')
    cy.get(myaccountPage.country).select('Indonesia')
    myaccountPage.clickBtnSave()
    cy.wait(2000)
    cy.get('.message-success').should('contain.text','You saved the address.')
  })

  it.only('Edit Address clear telepone Negative', () => {
    cy.get(myaccountPage.telephone).clear()
    cy.get(myaccountPage.street_1).clear().type('Anggerk')
    cy.get(myaccountPage.city).clear().type('Jakarta')
    cy.get(myaccountPage.zip).clear().type('12240')
    cy.get(myaccountPage.country).select('Indonesia')
    myaccountPage.clickBtnSave()
    cy.get('#telephone-error').should('be.visible')
  })

  it('Edit Address clear street Negative', () => {
    cy.get(myaccountPage.telephone).clear().type('089765412321')
    cy.get(myaccountPage.street_1).clear()
    cy.get(myaccountPage.city).clear().type('Jakarta')
    cy.get(myaccountPage.zip).clear().type('12240')
    cy.get(myaccountPage.country).select('Indonesia')
    myaccountPage.clickBtnSave()
    // cy.wait(2000)
    cy.get('#street_1-error').should('be.visible')
  })

  it('Edit Address clear city Negative', () => {
    cy.get(myaccountPage.telephone).clear().type('089765412321')
    cy.get(myaccountPage.street_1).clear().type('Anggerk')
    cy.get(myaccountPage.city).clear()
    cy.get(myaccountPage.zip).clear().type('12240')
    cy.get(myaccountPage.country).select('Indonesia')
    myaccountPage.clickBtnSave()
    cy.get('#city-error').should('be.visible')
    cy.get('#street_1-error').should('be.visible')
    
  })

  it('Edit Address clear zip Negative', () => {
    cy.get(myaccountPage.telephone).clear().type('089765412321')
    cy.get(myaccountPage.street_1).clear().type('Anggerk')
    cy.get(myaccountPage.city).clear().type('Jakarta')
    cy.get(myaccountPage.zip).clear()
    cy.get(myaccountPage.country).select('Indonesia')
    myaccountPage.clickBtnSave()
    cy.get('#zip-error').should('be.visible')
  })

  it('Edit Address clear country Negative', () => {
    cy.get(myaccountPage.telephone).clear().type('089765412321')
    cy.get(myaccountPage.street_1).clear().type('Anggerk')
    cy.get(myaccountPage.city).clear().type('Jakarta')
    cy.get(myaccountPage.zip).clear().type('12240')
    cy.get(myaccountPage.country)
    myaccountPage.clickBtnSave()
    cy.get('#country-error').should('be.visible')
    cy.get(':nth-child(2) > :nth-child(8)').should('be.visible')
    cy.get(':nth-child(2) > :nth-child(9)').should('be.visible')
  })

})