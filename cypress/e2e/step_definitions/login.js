import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '@pages/LoginPage'

Given("A web browser at the deliveryWorkFlow login page", () => {
  cy.visit("https://deliveryworkflow.dev.pwc.co.uk/loginmx.html");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});

Then("the user will be landed on the home page", () => {
 // homePage.elements.homeHeader().should('have.text','Home')
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMsg().should("have.text", errorMessage);
});
