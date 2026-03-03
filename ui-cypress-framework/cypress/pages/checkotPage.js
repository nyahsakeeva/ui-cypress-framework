import { selectors } from "../support/objects";

export class CheckoutPage {
  assertOnStepOne() {
    cy.url().should("include", "/checkout-step-one.html");
  }

  fillInfo({ firstName, lastName, postalCode }) {
    cy.get(selectors.checkout.firstName).clear().type(firstName);
    cy.get(selectors.checkout.lastName).clear().type(lastName);
    cy.get(selectors.checkout.postalCode).clear().type(postalCode);
  }

  continue() {
    cy.get(selectors.checkout.continueBtn).click();
  }

  finish() {
    cy.get(selectors.checkout.finishBtn).click();
  }

  assertComplete() {
    cy.url().should("include", "/checkout-complete.html");
    cy.get(selectors.checkout.completeHeader)
      .should("be.visible")
      .and("contain", "Thank you for your order");
  }

  assertErrorContains(text) {
    cy.get(selectors.checkout.error).should("be.visible").and("contain", text);
  }
}