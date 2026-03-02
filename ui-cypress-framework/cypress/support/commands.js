import { loginPage } from "./objects";

Cypress.Commands.add("login", (username, password) => {
  cy.get(loginPage.username).clear().type(username);
  cy.get(loginPage.password).clear().type(password, { log: false });
  cy.get(loginPage.submit).click();
});