import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";

describe("Inventory - POM", () => {
  const login = new LoginPage();
  const inventory = new InventoryPage();

  beforeEach(() => {
    login.loginAs("standard");
    inventory.assertOnInventory();
  });

  it("adds item and shows badge", () => {
    inventory.addItem("Sauce Labs Backpack");
    inventory.assertCartBadge(1);
  });

  it("logs out successfully", () => {
    inventory.logout();
    login.assertOnLoginPage();
  });
});