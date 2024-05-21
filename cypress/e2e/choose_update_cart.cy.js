
class Shop{

    visitShop(){
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
        cy.wait(5000)
        cy.get('.global').scrollIntoView()
    }
    showCart(){
        cy.get('.showcart').click()
        cy.wait(5000)
        cy.get(':nth-child(7) > .secondary > .action > span').click()
    }
}

const shop = new Shop()
describe("testing choose product", () => {
    it("Visit Home Page", () => {
      shop.visitShop()
      shop.chooseProduct()
      
      cy.get('#option-label-size-143').then(function(e){
        const t = e.text()
        expect(t).to.contains('Size')
        shop.scrollUp();
        shop.chooseProductOne();
        shop.chooseProductTwo();
        shop.showCart();
        
        


        }) 
 
    })

})
