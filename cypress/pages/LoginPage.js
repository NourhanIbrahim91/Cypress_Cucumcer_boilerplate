class LoginPage {
  
  elements = {
    accessDeliveryWorkflowbtn: () => cy.get('#loginButton'),
    email: () => cy.get("input[type='email']"),
    nextbtn: () => cy.contains("Next"),
    userName: () => cy.get("#usernameInput"),
    passWord: () => cy.get("#passwordInput"),
    loginBtn: () => cy.get("#loginButton"),
    errorMsg: () => cy.get("#loginMessage"),
    pageTitle:() => cy.get(".title")
  };
  typeUserName(userName) {
    this.elements.userName().type(userName);
  }

  typePassword(passWord) {
    this.elements.passWord().type(passWord);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.userName().type(username);
    this.elements.passWord().type(password);
    this.elements.loginBtn().click();
  }

  login(email){
    //this.elements.accessDeliveryWorkflowbtn().click();
    this.elements.email().type(email);
    this.elements.nextbtn().click();
  }
}
module.exports = new LoginPage();
