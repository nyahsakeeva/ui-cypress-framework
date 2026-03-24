import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

describe("Login - POM", { tags: ["@smoke", "@auth", "@regression"] }, () => {
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