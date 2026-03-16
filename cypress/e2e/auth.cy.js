import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";

describe("Auth - POM", () => {
  const login = new LoginPage();
  const inventory = new InventoryPage();

  it("logs in as standard user using role helper", () => {
    login.loginAs("standard");
    inventory.assertOnInventory();
  });

  it("logs out successfully", () => {
    login.loginAs("standard");
    inventory.assertOnInventory();

    inventory.logout();
    login.assertOnLoginPage();
  });

  it("shows error for invalid credentials", () => {
    login.visit();
    login.loginWith("wrong", "wrong");
    login.assertErrorContains("Username and password do not match");
  });

  it("locked out user cannot log in", () => {
    login.loginAs("locked");
    login.assertErrorContains("Sorry, this user has been locked out");
  });
});