import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

describe("Cart - POM", () => {
  const login = new LoginPage();
  const inventory = new InventoryPage();
  const cart = new CartPage();

  beforeEach(() => {
    login.loginAs("standard");
    inventory.assertOnInventory();
  });

  it("adds multiple items and verifies cart", () => {
    inventory.addItem("Sauce Labs Backpack");
    inventory.addItem("Sauce Labs Bike Light");
    inventory.assertCartBadge(2);

    inventory.openCart();
    cart.assertItemsCount(2);
  });
});