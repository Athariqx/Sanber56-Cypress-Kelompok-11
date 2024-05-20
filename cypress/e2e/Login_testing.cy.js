import LoginPage from "../support/pageObject/LoginPOM"

describe('LOGIN testing ', () => {
  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + "@gmail.com"
    return email
  }

  let userEmail = randomEmail()

  beforeEach(() => {
    cy.visit('customer/account/login/')
  })
  it('Failed Login - Wrong Credentials', () => {
    cy.customerLogin(userEmail,'salah12345')
    cy.wait(100)
    cy.customerVerify('.message-error','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })

  it('Failed Login - Invalid Email', () => {
    // Melakukan login dengan kredensial salah
    cy.customerLogin('salah', 'salah');
    
    // Menunggu elemen dengan timeout yang lebih panjang
    cy.get('#email-error', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
});
  
  it('Failed Login - Test Fixtures', () => {
    cy.fixture('usersCreated.json').then((users) => {
      const userdata = users[1]
      cy.customerLogin(userdata.username,userdata.password)
      cy.get('.message-error > div').should('be.visible')
    })
  })

  it('Failed Login - Test POM', () => {
    cy.get(LoginPage.email).type('POM@gmail.com')
    cy.get(LoginPage.psw).type('salah')
    cy.get(LoginPage.login_btn).click()
    cy.get(LoginPage.error_msg).should('be.visible')
  })

  it('Success Login', () => {
    cy.customerLogin('atharix11@gmail.com','Rahasia-123')
    cy.url().should('include', '/customer/account/');
  })
 
})