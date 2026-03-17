import { LoginPage } from "../pages/loginPage.js";
import { InventoryPage } from "../pages/inventoryPage.js";
import { CartPage } from "../pages/cartPage.js";

describe("Navigation - POM", { tags: ["@regression", "@navigation"] }, () => {
  const login = new LoginPage();
  const inventory = new InventoryPage();
  const cart = new CartPage();

  beforeEach(() => {
    login.loginAs("standard");
    inventory.assertOnInventory();
  });

  it("navigates to cart and verifies cart page loads", () => {
    inventory.openCart();
    cart.assertOnCartPage();
  });

  it("adds item -> goes to cart -> sees it in cart", () => {
    inventory.addItem("Sauce Labs Backpack");
    inventory.assertCartBadge(1);

    inventory.openCart();
    cart.assertOnCartPage();
    cart.assertItemVisible("Sauce Labs Backpack");
  });

  it("goes to cart then continues shopping back to inventory", () => {
    inventory.openCart();
    cart.assertOnCartPage();

    cart.continueShopping();
    inventory.assertOnInventory();
  });
});