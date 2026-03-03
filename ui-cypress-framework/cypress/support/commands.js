Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("loginAs", (role = "standard") => {
  cy.fixture("credentials").then((creds) => {
    cy.login(creds[role].username, creds[role].password);
  });
});

Cypress.Commands.add("addItemToCartByName", (name) => {
  cy.contains(".inventory_item", name)
    .find('button[data-test^="add-to-cart"]')
    .click();
});

Cypress.Commands.add("removeItemFromCartByName", (name) => {
  cy.contains(".cart_item", name)
    .find('button[data-test^="remove"]')
    .click();
});