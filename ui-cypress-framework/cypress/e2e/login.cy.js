import { LoginPage } from "../pages/LoginPage";
import { loginPage } from "../support/objects";

describe("Login (demo)", () => {
  const page = new LoginPage();

  beforeEach(() => {
    page.visit();

    // Demo-only: inject a simple login form into example.cypress.io page
    cy.document().then((doc) => {
      const container = doc.createElement("div");
      container.innerHTML = `
        <div style="margin:16px 0">
          <input data-test="username" placeholder="username" />
          <input data-test="password" placeholder="password" type="password" />
          <button data-test="login-submit">Login</button>
          <div data-test="error" style="color:red; display:none;"></div>
          <div data-test="success" style="color:green; display:none;"></div>
        </div>
      `;
      doc.body.prepend(container);

      doc.querySelector('[data-test="login-submit"]').addEventListener("click", () => {
        const u = doc.querySelector('[data-test="username"]').value;
        const p = doc.querySelector('[data-test="password"]').value;
        const error = doc.querySelector('[data-test="error"]');
        const success = doc.querySelector('[data-test="success"]');

        error.style.display = "none";
        success.style.display = "none";

        if (u === "admin" && p === "pass123") {
          success.textContent = "Logged in";
          success.style.display = "block";
        } else {
          error.textContent = "Invalid credentials";
          error.style.display = "block";
        }
      });
    });
  });

  it("logs in with valid credentials", () => {
    cy.login("admin", "pass123");
    cy.get(loginPage.success).should("be.visible").and("contain", "Logged in");
  });

  it("shows an error with invalid credentials", () => {
    cy.login("wrong", "wrong");
    cy.get(loginPage.error).should("be.visible").and("contain", "Invalid credentials");
  });
});