class HairCare {
  
  elements = {

    hairCareProducts: () => cy.get(".fixed_wrapper .prdocutname"),

  };

  logHairCareProducts() {
    this.elements.hairCareProducts().each(($el, index, $list) => {
       cy.log("index: " + index + ":" + $el.text() )
    })
  }

  addProductToBasket() {
    this.elements.hairCareProducts().each(($el, index, $list) => {
      if($el.text().includes('Curls to straight Shampoo')){
        cy.wrap($el).click()
      }
    })
  }
 
}
module.exports = new HairCare();
