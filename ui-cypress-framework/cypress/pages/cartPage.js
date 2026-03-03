import { selectors } from "../support/objects";

export class CartPage {
  assertOnCart() {
    cy.url().should("include", "/cart.html");
    cy.get(selectors.cart.title).should("contain", "Your Cart");
  }

  assertHasItems(minCount = 1) {
    cy.get(selectors.cart.cartItem).should("have.length.at.least", minCount);
  }

  checkout() {
    cy.get(selectors.cart.checkoutBtn).click();
  }
}