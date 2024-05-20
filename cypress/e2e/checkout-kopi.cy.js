//Generate Random number
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
describe('template spec', () => {
  beforeEach(() => {
       // Kode yang dijalankan sebelum setiap tes
       cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/')
       cy.get('#email').clear().type('kggy00rm@gmail.com')
       cy.get('#pass').clear().type('Aa12345*')
       cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()  
  })
  it('Success choose product - Gear Products - Bags - Jika hanya ada 1 variasi', () => {
    const randomNumber = generateRandomNumber(10, 99); // Angka acak antara 10 dan 99
    cy.log('Generated Random Number: ' + randomNumber);
    //untuk mencetak nomor acak yang dihasilkan
    cy.get('#ui-id-6 > :nth-child(2)').click()
    cy.get('dd > .items > :nth-child(1) > a').click()
cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('#qty').clear().type(randomNumber)
    cy.get('#product-addtocart-button').click()
    cy.get('.showcart > .counter').should('be.visible')
})
it('Failed-checkout', () => {
  cy.get('.showcart > .counter').click()
  cy.get(':nth-child(6) > .secondary > .action > span').click()
  cy.get('#block-shipping > .title').click()
  cy.get('.methods > :nth-child(1) > .action').click()
  cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping')
  cy.get('#shipping > .step-title')
  cy.get('.button').click()
  cy.get('.button', { timeout: 80000 }).should('be.visible')
  cy.get('#billing-address-same-as-shipping-checkmo', { timeout: 80000 }).should('be.visible')
  cy.get('#billing-address-same-as-shipping-checkmo').uncheck()
  cy.get('.field-select-billing > .control > .select').select('New Address')
  cy.get('.action-update').click()
  cy.contains('This is a required field.').should('be.visible')
})

it('Success-checkout', () => {
  cy.get('.showcart > .counter').click()
  cy.get(':nth-child(6) > .secondary > .action > span').click()
  cy.get('#block-shipping > .title').click()
  cy.get('.methods > :nth-child(1) > .action').click()
  cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping')
  cy.get('#shipping > .step-title')
  cy.get('.button').click()
  cy.get('.button', { timeout: 80000 }).should('be.visible')
  cy.get('.payment-method-content > :nth-child(4) > div.primary > .action', { timeout: 80000 }).should('be.visible')
  cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
  cy.get('.base').should('be.visible')
})
})