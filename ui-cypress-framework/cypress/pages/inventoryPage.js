import { selectors } from "../support/objects";
import { inventoryObjects } from "../support/objects";

export class InventoryPage {
  assertOnInventory() {
    cy.url().should("include", "/inventory.html");
    cy.get(inventoryObjects.inventoryItem).should("be.visible");
  }

  addFirstItemToCart() {
    cy.get(selectors.inventory.item).first().within(() => {
      cy.get(selectors.inventory.addToCartBtn).click();
    });
  }

  openCart() {
    cy.get(selectors.header.cartLink).click();
  }

  assertCartBadgeCount(expected) {
    cy.get(selectors.header.cartBadge).should("have.text", String(expected));
  }

  logout() {
    cy.get(selectors.header.burgerBtn).click();
    cy.get(selectors.header.logoutLink).should("be.visible").click();
  }
}