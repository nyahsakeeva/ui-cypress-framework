import { loginPage } from "../support/objects";

export class LoginPage {
  visit() {
    cy.visit("/commands/actions");
  }

  fillUsername(value) {
    cy.get(loginPage.username).clear().type(value);
  }

  fillPassword(value) {
    cy.get(loginPage.password).clear().type(value, { log: false });
  }

  submit() {
    cy.get(loginPage.submit).click();
  }
}