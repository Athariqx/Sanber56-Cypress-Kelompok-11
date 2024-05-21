import Shop from "../support/pageObject/choose_update_POM"

describe("testing choose product", () => {
    it("Visit Home Page", () => {
      Shop.visitShop()
      Shop.chooseProduct()
      cy.get('#option-label-size-143').then(function(e){
        const t = e.text()
        expect(t).to.contains('Size')
        Shop.scrollUp();
        Shop.chooseProductOne();
        Shop.chooseProductTwo();
        Shop.showCart();
        Shop.updateCartOne();
        Shop.updateCartTwo();
        }) 
 
    })

})
