class HomePage {
  
  elements = {

    hairCareHeaderLink: () => cy.get("a[href*='product/category&path']").contains("Hair Care"),

  };

  goToHairCarePage() {
    this.elements.hairCareHeaderLink().click();
  }

 
}
module.exports = new HomePage();
