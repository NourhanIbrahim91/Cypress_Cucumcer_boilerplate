import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import homePage from '@pages/automation-tester/HomePage'
import haircarePage from '@pages/automation-tester/HairCare'

Given("A web browser at the automationTester home page", () => {
  cy.visit("https://automationteststore.com/");
});

When("A user selects HairCare from the main nav menu", () => {
  homePage.goToHairCarePage();
  
});

Then("A user can see all hair care products to choose from", () => {
 haircarePage.logHairCareProducts();
});

Then("A user can select a product to add to the basket", () => {
haircarePage.addProductToBasket();
 });
 

