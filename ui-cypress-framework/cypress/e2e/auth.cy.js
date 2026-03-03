import { authObjects } from "../support/objects";

describe("Auth", () => {

  it("logs in successfully with standard user", () => {
    cy.loginAs("standard");

    cy.url().should("include", "/inventory");
    cy.get(authObjects.inventoryList).should("be.visible");
  });


  it("shows error for invalid credentials", () => {
    cy.login("wrong", "wrong");

    cy.get(authObjects.errorMessage)
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });


  it("blocks locked out user", () => {
    cy.loginAs("locked");

    cy.get(authObjects.errorMessage)
      .should("be.visible")
      .and("contain", "locked out");
  });


  it("logs out and redirects to login", () => {
    cy.loginAs("standard");

    cy.get(authObjects.burgerMenu).click();
    cy.get(authObjects.logoutLink).click();

    cy.url().should("include", "/");
    cy.get(authObjects.loginButton).should("be.visible");
  });

});


describe("Auth Guard", () => {

  it("redirects to login if user opens inventory directly without session", () => {

    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit("/inventory.html", { failOnStatusCode: false });

    cy.url().should("include", "saucedemo.com");

    cy.get(authObjects.loginButton).should("be.visible");
  });

});