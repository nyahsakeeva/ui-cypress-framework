// cypress/support/commands.js
import { loginObjects, inventoryObjects } from "./objects";

/**
 * UI Login using role from fixtures/credentials.json
 * Usage (ONLY from pages): cy.loginAs("standard")
 */
Cypress.Commands.add("loginAs", (role = "standard") => {
  cy.fixture("credentials").then((creds) => {
    if (!creds[role]) {
      throw new Error(
        `Role "${role}" not found in credentials.json. Available roles: ${Object.keys(creds).join(", ")}`
      );
    }

    const { username, password } = creds[role];

    cy.visit("/");
    cy.get(loginObjects.username).should("be.visible").clear().type(username);
    cy.get(loginObjects.password).should("be.visible").clear().type(password, { log: false });
    cy.get(loginObjects.loginBtn).click();
  });
});

/**
 * Adds item by visible product name on Inventory page
 * Usage (ONLY from pages): cy.addItemToCartByName("Sauce Labs Backpack")
 */
Cypress.Commands.add("addItemToCartByName", (productName) => {
  // This targets the product card by text and clicks the button inside its container.
  cy.contains('[data-test="inventory-item"]', productName)
    .should("be.visible")
    .within(() => {
      cy.contains("button", /add to cart/i).click();
    });
});

/**
 * Removes item by visible product name on Inventory page
 */
Cypress.Commands.add("removeItemFromCartByName", (productName) => {
  cy.contains('[data-test="inventory-item"]', productName)
    .should("be.visible")
    .within(() => {
      cy.contains("button", /remove/i).click();
    });
});

/**
 * Logout helper
 */
Cypress.Commands.add("logout", () => {
  cy.get(inventoryObjects.burgerMenu).click();
  cy.get(inventoryObjects.logoutLink).should("be.visible").click();
});

Cypress.Commands.add("addItemToCartByName", (productName) => {
  cy.contains('[data-test="inventory-item"]', productName)
    .within(() => {
      cy.contains("button", "Add to cart").click()
    })
})