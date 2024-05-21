import Shop from "../support/pageObject/choose_update_POM"

describe("testing choose product", () => {
    it("Visit Home Page", () => {

      //mengunjungi halaman utama
      Shop.visitShop()
      
      //memilih produk di etalase
      Shop.chooseProduct()
      cy.get('#option-label-size-143').then(function(e){
        const t = e.text()
        expect(t).to.contains('Size')
        Shop.scrollUp();
        
        //memilih 2 produk
        Shop.chooseProductOne();
        Shop.chooseProductTwo();
        
        //menampilkan keranjang
        Shop.showCart();
        
        //mengupdate kuantitas kedua produk
        Shop.updateCartOne();
        Shop.updateCartTwo();
        }) 
    })

})
