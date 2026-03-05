// cypress/pages/CheckoutPage.js
import { checkoutObjects } from "../support/objects";

export class CheckoutPage {
  fillInfo({ firstName, lastName, zip }) {
    cy.get(checkoutObjects.firstName).clear().type(firstName);
    cy.get(checkoutObjects.lastName).clear().type(lastName);
    cy.get(checkoutObjects.postalCode).clear().type(zip);
  }

  continue() {
    cy.get(checkoutObjects.continueBtn).click();
  }

  finish() {
    cy.get(checkoutObjects.finishBtn).click();
  }

  assertOrderComplete() {
    cy.get(checkoutObjects.completeHeader).should("be.visible").and("contain", "Thank you");
  }
}