//import { types } from "mime-types"

class myaccountPage{

    telephone = '#telephone'
    street_1 = '#street_1'
    city = '#city'
    zip = '#zip'
    country = '#country'

    clickBtnSave (){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action[type="submit"]').click()
    } 
}

export default new myaccountPage()