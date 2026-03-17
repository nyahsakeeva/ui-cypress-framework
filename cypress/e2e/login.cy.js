import { LoginPage } from "../pages/loginPage.js";
import { InventoryPage } from "../pages/inventoryPage.js";

describe("Login - POM", { tags: ["@smoke", "@auth"] }, () => {
  const login = new LoginPage();
  const inventory = new InventoryPage();

  beforeEach(() => {
    login.visit();
  });

  it("logs in successfully", () => {
    login.loginAs("standard");
    inventory.assertOnInventory();
  });

  it("shows error for invalid credentials", () => {
    login.loginWith("wrong", "wrong");
    login.assertErrorContains("Username and password do not match");
  });
});