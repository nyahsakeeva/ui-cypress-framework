import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

describe("Inventory - POM", { tags: '@regression' }, () => {
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