import { inventoryObjects } from "../support/objects";

describe("Inventory", () => {

  beforeEach(() => {
    cy.loginAs("standard");
  });

  it("adds and removes an item from inventory list", () => {

    cy.addItemToCartByName("Sauce Labs Backpack");

    cy.get(inventoryObjects.cartBadge).should("contain", "1");

    cy.contains(inventoryObjects.inventoryItem, "Sauce Labs Backpack")
      .find(inventoryObjects.removeBtnByPrefix)
      .click();

    cy.get(inventoryObjects.cartBadge).should("not.exist");

  });

  it("opens a product details page and verifies details", () => {

    cy.contains(inventoryObjects.inventoryItemName, "Sauce Labs Backpack").click();

    cy.url().should("include", "inventory-item.html");

    cy.get(inventoryObjects.detailsName).should("contain", "Sauce Labs Backpack");
    cy.get(inventoryObjects.detailsPrice).should("match", /\$\d+/);
    cy.get(inventoryObjects.detailsDesc).should("not.be.empty");

  });

  it("sorts products by price low to high and validates order", () => {

    cy.get(inventoryObjects.sortDropdown).select("lohi");

    const prices = [];

    cy.get(inventoryObjects.inventoryItemPrice)
      .each(($el) => {
        prices.push(Number($el.text().replace("$", "")));
      })
      .then(() => {
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sorted);
      });

  });

  it("adds all inventory items to cart", () => {

  cy.loginAs("standard");

  cy.get('button[data-test^="add-to-cart"]')
    .each(($btn) => {
      cy.wrap($btn).click();
    });

  cy.get(".shopping_cart_badge")
    .should("contain", "6");

});

});
