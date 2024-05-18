import registerPage from "../support/pageObject/RegisterPOM"

describe('REGISTER testing', () => {

  it('CREATE ACCOUNT Success', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    //cy.get('#firstname').type('Athariq')
    //cy.get('#lastname').type('Rifky')
    cy.register_fullname('Athariq','Rifky')
    cy.get(registerPage.email).type('atharix11@gmail.com')
    cy.get(registerPage.psw).type('Rahasia-123')
    cy.get(registerPage.pswC).type('Rahasia-123')
    cy.get(registerPage.register_btn).click()
    //Athariq-REATE ACCOUNT Success (POSITIVE)
  })
 
  it('CREATE ACCOUNT Failed - Email already used', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    //cy.get('#firstname').type('Athariq')
    //cy.get('#lastname').type('Rifky')
    cy.register_fullname('Athariq','Rifky')
    cy.get(registerPage.email).type('atharix11@gmail.com')
    cy.get(registerPage.psw).type('Rahasia-123')
    cy.get(registerPage.pswC).type('Rahasia-123')
    cy.get(registerPage.register_btn).click()
    cy.get('.message-error').should('contain.text','There is already an account with this email address. If you are sure that it is your email address')
    
    //same like first "it"
    //There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account. (NEGATIVE)
  })

  it('CREATE ACCOUNT Failed - Password doesnt match', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    //cy.get('#firstname').type('rifky')
    //cy.get('#lastname').type('JKT')
    cy.register_fullname('rifky','JKT')
    cy.get(registerPage.email).type('Rifkyjkt@gmail.com')
    cy.get(registerPage.psw).type('Rahasia-123')
    cy.get(registerPage.pswC).type('Rahasia123')
    cy.get(registerPage.register_btn).click()
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again')
    //Please enter the same value again. (NEGATIVE)
    })

    it('CREATE ACCOUNT Failed - Email not valid', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
      //cy.get('#firstname').type('Athariq')
      //cy.get('#lastname').type('Ganteng')
      cy.register_fullname('Athariq','Ganteng')
      cy.get(registerPage.email).type('ganteng_bgt_aamiin')
      cy.get(registerPage.psw).type('Rahasia-123')
      cy.get(registerPage.pswC).type('Rahasia-123')
      cy.get(registerPage.register_btn).click()
      cy.get('#email_address-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com)')
      //Please enter valid email. (NEGATIVE)
      })
  
      it('CREATE ACCOUNT Failed - Email already used (test POM)', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        //cy.register_fullname('Athariq','Rifky')
        cy.get(registerPage.F_name).type('Bang')
        cy.get(registerPage.L_name).type('Thor')
        cy.get(registerPage.email).type('atharix11@gmail.com')
        cy.get(registerPage.psw).type('Rahasia-123')
        cy.get(registerPage.pswC).type('Rahasia-123')
        cy.get(registerPage.register_btn).click()
        cy.get(registerPage.msg_error).should('contain.text','There is already an account with this email address. If you are sure that it is your email address')
      })
})