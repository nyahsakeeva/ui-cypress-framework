import { authObjects } from "../support/objects";

export class LoginPage {

  visit() {
    cy.visit("/");
  }

  fillUsername(username) {
    cy.get(authObjects.usernameInput)
      .should("be.visible")
      .clear()
      .type(username);
  }

  fillPassword(password) {
    cy.get(authObjects.passwordInput)
      .should("be.visible")
      .clear()
      .type(password, { log: false });
  }

  submit() {
    cy.get(authObjects.loginButton)
      .should("be.enabled")
      .click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  assertErrorContains(message) {
    cy.get(authObjects.errorMessage)
      .should("be.visible")
      .and("contain", message);
  }

}