import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";

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