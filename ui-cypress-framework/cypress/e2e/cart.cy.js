import { cartObjects } from "../support/objects";

describe("Cart", () => {
  beforeEach(() => {
    cy.loginAs("standard");
  });

  it("adds multiple items, verifies cart badge and cart contents", () => {
    cy.addItemToCartByName("Sauce Labs Backpack");
    cy.addItemToCartByName("Sauce Labs Bike Light");

    cy.get(cartObjects.cartBadge).should("contain", "2");
    cy.get(cartObjects.cartLink).click();

    cy.get(cartObjects.cartItem).should("have.length", 2);
    cy.contains(cartObjects.cartItem, "Sauce Labs Backpack").should("be.visible");
    cy.contains(cartObjects.cartItem, "Sauce Labs Bike Light").should("be.visible");
  });

  it("removes item from cart and badge updates correctly", () => {
    cy.addItemToCartByName("Sauce Labs Backpack");
    cy.addItemToCartByName("Sauce Labs Bike Light");

    cy.get(cartObjects.cartLink).click();
    cy.removeItemFromCartByName("Sauce Labs Backpack");

    cy.get(cartObjects.cartItem).should("have.length", 1);
    cy.contains(cartObjects.cartItem, "Sauce Labs Bike Light").should("be.visible");
  });

  it("continue shopping returns to inventory", () => {
    cy.addItemToCartByName("Sauce Labs Backpack");
    cy.get(cartObjects.cartLink).click();

    cy.get(cartObjects.continueShoppingBtn).click();
    cy.url().should("include", "/inventory");
  });
});

describe("Cart Persistence", () => {
  beforeEach(() => {
    cy.loginAs("standard");
  });

  it("keeps cart count consistent across inventory, details, cart", () => {
    cy.addItemToCartByName("Sauce Labs Backpack");
    cy.addItemToCartByName("Sauce Labs Bike Light");

    cy.get(cartObjects.cartBadge).should("contain", "2");

    cy.contains(cartObjects.inventoryItemName, "Sauce Labs Backpack").click();
    cy.get(cartObjects.cartBadge).should("contain", "2");

    cy.get(cartObjects.cartLink).click();
    cy.get(cartObjects.cartItem).should("have.length", 2);

    cy.get(cartObjects.cartLink).click();
    cy.url().should("include", "cart");
  });

  it("removing on details page updates badge and cart list", () => {
    cy.addItemToCartByName("Sauce Labs Backpack");
    cy.get(cartObjects.cartBadge).should("contain", "1");

    cy.contains(cartObjects.inventoryItemName, "Sauce Labs Backpack").click();
    cy.get(cartObjects.removeBtnByPrefix).click();

    cy.get(cartObjects.cartBadge).should("not.exist");

    cy.get(cartObjects.cartLink).click();
    cy.get(cartObjects.cartItem).should("have.length", 0);
  });
});