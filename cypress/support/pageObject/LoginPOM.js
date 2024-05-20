class LoginPage {
    email = '#email'
    psw = '#pass'
    error_msg = '.message-error'
    login_btn = '#send2'

    inputEmail(email){
        cy.get(this.email).clear().type(email)
    }
    inputPsw(psw){
        cy.get(this.psw).clear().type(psw)
    }
    clickLogin(){
        cy.get(this.login_btn).click()
    }
    verifyError(){
        cy.get(this.error_msg).should('be.visible')
    }
}
export default new LoginPage();