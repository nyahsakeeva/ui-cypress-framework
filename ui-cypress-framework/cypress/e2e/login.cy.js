import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";

describe("Login - POM", () => {
  const login = new LoginPage();
  const inventory = new InventoryPage();

  beforeEach(() => {
    login.visit();
  });

  it("logs in successfully", () => {
    login.login("standard_user", "secret_sauce");
    inventory.assertOnInventory();
  });

  it("shows error for invalid credentials", () => {
    login.login("wrong", "wrong");
    login.assertErrorContains("Username and password do not match");
  });
});

