import { inventoryObjects } from "../support/objects";

export class InventoryPage {
  assertOnInventory() {
    cy.get(inventoryObjects.title).should("be.visible").and("contain", "Products");
  }

  // ---------------- Cart actions ----------------
  addItem(productName) {
    cy.addItemToCartByName(productName);
  }

  removeItem(productName) {
    cy.removeItemFromCartByName(productName);
  }

  openCart() {
    cy.get(inventoryObjects.cartLink).click();
  }

  assertCartBadge(count) {
    cy.get(inventoryObjects.cartBadge).should("contain", String(count));
  }

  logout() {
    cy.logout();
  }

  // ---------------- Sorting actions ----------------
  sortBy(value) {
    // values in SauceDemo: az, za, lohi, hilo
    cy.get(inventoryObjects.sortDropdown).should("be.visible").select(value);
  }

  getItemNames() {
    return cy.get(inventoryObjects.inventoryItemName).then(($els) =>
      [...$els].map((el) => el.innerText.trim())
    );
  }

  assertNamesSortedAZ() {
    this.getItemNames().then((names) => {
      const sorted = [...names].sort((a, b) => a.localeCompare(b));
      expect(names, "Names should be sorted A to Z").to.deep.equal(sorted);
    });
  }

  assertNamesSortedZA() {
    this.getItemNames().then((names) => {
      const sorted = [...names].sort((a, b) => b.localeCompare(a));
      expect(names, "Names should be sorted Z to A").to.deep.equal(sorted);
    });
  }
}