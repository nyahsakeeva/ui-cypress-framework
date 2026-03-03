import { navigationObjects } from "../support/objects";

describe("Navigation and App State", () => {

  beforeEach(() => {
    cy.loginAs("standard");
  });

  it("reset app state clears cart", () => {

    cy.addItemToCartByName("Sauce Labs Backpack");

    cy.get(navigationObjects.cartBadge)
      .should("contain", "1");

    cy.get(navigationObjects.burgerMenuBtn)
      .click();

    cy.get(navigationObjects.resetAppStateLink)
      .click();

    cy.get(navigationObjects.cartBadge)
      .should("not.exist");

  });

  it("about link navigates away", () => {

    cy.get(navigationObjects.burgerMenuBtn)
      .click();

    cy.get(navigationObjects.aboutLink)
      .click();

    cy.url()
      .should("include", "saucelabs.com");

  });

});