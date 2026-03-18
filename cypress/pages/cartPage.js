import { cartObjects } from "../support/objects";

export class CartPage {
  assertOnCartPage() {
    cy.url().should("include", "/cart");
  }

  assertItemsCount(count) {
    cy.get(cartObjects.cartItem).should("have.length", count);
  }

  assertItemVisible(productName) {
    cy.contains(cartObjects.cartItem, productName).should("be.visible");
  }

  continueShopping() {
    cy.get(cartObjects.continueShoppingBtn).click();
  }

  checkout() {
    cy.get(cartObjects.checkoutBtn).click();
  }
}