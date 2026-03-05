// cypress/pages/LoginPage.js
import { loginObjects } from "../support/objects";

export class LoginPage {
  visit() {
    cy.visit("/");
  }

  loginAs(role = "standard") {
    // uses global helper command, but specs don't call commands directly
    cy.loginAs(role);
  }

  loginWith(username, password) {
    cy.get(loginObjects.username).should("be.visible").clear().type(username);
    cy.get(loginObjects.password).should("be.visible").clear().type(password, { log: false });
    cy.get(loginObjects.loginBtn).click();
  }

  assertErrorContains(text) {
    cy.get(loginObjects.errorMsg).should("be.visible").and("contain", text);
  }

  assertOnLoginPage() {
    cy.get(loginObjects.loginBtn).should("be.visible");
  }
}