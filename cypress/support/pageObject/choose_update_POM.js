class Shop{

    visitShop(){
        cy.clearCookies();
        cy.visit('https://magento.softwaretestingboard.com');
    }
    chooseProduct(){
        cy.get('.product-items > :nth-child(1)').click()
    }
    chooseProductOne(){
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-56').click()
        cy.get('#qty').clear().type("3")
        cy.get('#product-addtocart-button').click()
    }
    chooseProductTwo(){
        cy.get('#option-label-size-143-item-169').click()
        cy.get('#option-label-color-93-item-57').click()
        cy.get('#qty').clear().type("2")
        cy.get('#product-addtocart-button').click()
    }
    scrollUp(){
        cy.wait(3000)
        cy.get('.global').scrollIntoView()
    }
    showCart(){
        cy.get('.showcart').click()
        cy.wait(5000)
        cy.get(':nth-child(7) > .secondary > .action > span').click()
    }
    Cart(){
        cy.get('.showcart').click()
        cy.wait(5000)
        cy.get(':nth-child(7) > .secondary > .action > span').click()
    }
    updateCartOne(){
        cy.wait(1000)
        cy.get(':nth-child(3) > .item-actions > td > .actions-toolbar > .action-edit').click()
        cy.wait(3000)
        cy.get('#qty').clear().type("1")
        cy.get('#product-updatecart-button').click() 
    }
    updateCartTwo(){
        cy.wait(1000)
        cy.get(':nth-child(4) > .item-actions > td > .actions-toolbar > .action-edit').click()
        cy.wait(3000)
        cy.get('#qty').clear().type("1")
        cy.get('#product-updatecart-button').click() 
    }

}
export default new Shop()