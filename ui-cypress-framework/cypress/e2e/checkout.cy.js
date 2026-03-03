import { cartObjects, checkoutObjects } from "../support/objects";

describe("Checkout", () => {

  beforeEach(() => {
    cy.loginAs("standard");
    cy.addItemToCartByName("Sauce Labs Backpack");

    cy.get(cartObjects.cartLink).click();
    cy.get(checkoutObjects.checkoutBtn).click();
  });

  it("requires first name / last name / postal code", () => {

    cy.get(checkoutObjects.continueBtn).click();

    cy.get(checkoutObjects.errorMessage)
      .should("contain", "First Name is required");

    cy.get(checkoutObjects.firstNameInput).type("Alta");
    cy.get(checkoutObjects.continueBtn).click();

    cy.get(checkoutObjects.errorMessage)
      .should("contain", "Last Name is required");

    cy.get(checkoutObjects.lastNameInput).type("S");
    cy.get(checkoutObjects.continueBtn).click();

    cy.get(checkoutObjects.errorMessage)
      .should("contain", "Postal Code is required");

  });


  it("completes checkout end-to-end and validates totals", () => {

    cy.get(checkoutObjects.firstNameInput).type("Alta");
    cy.get(checkoutObjects.lastNameInput).type("S");
    cy.get(checkoutObjects.postalCodeInput).type("60000");

    cy.get(checkoutObjects.continueBtn).click();

    cy.contains(checkoutObjects.summaryItemName, "Sauce Labs Backpack")
      .should("be.visible");

    let itemTotal;
    let tax;
    let total;

    cy.get(checkoutObjects.summarySubtotal)
      .invoke("text")
      .then((text) => {
        itemTotal = Number(text.replace("Item total: $", ""));
      });

    cy.get(checkoutObjects.summaryTax)
      .invoke("text")
      .then((text) => {
        tax = Number(text.replace("Tax: $", ""));
      });

    cy.get(checkoutObjects.summaryTotal)
      .invoke("text")
      .then((text) => {
        total = Number(text.replace("Total: $", ""));
      })
      .then(() => {
        expect(Number((itemTotal + tax).toFixed(2))).to.equal(total);
      });

    cy.get(checkoutObjects.finishBtn).click();

    cy.get(checkoutObjects.orderCompleteHeader)
      .should("contain", "Thank you for your order");
  });


  it("can cancel checkout and return to cart", () => {

    cy.get(checkoutObjects.cancelBtn).click();

    cy.url().should("include", "cart");

    cy.get(checkoutObjects.checkoutBtn)
      .should("be.visible");

  });

});