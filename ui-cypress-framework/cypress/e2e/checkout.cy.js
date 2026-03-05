import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

describe("Checkout - POM", () => {
  const login = new LoginPage();
  const inventory = new InventoryPage();
  const cart = new CartPage();
  const checkout = new CheckoutPage();

  beforeEach(() => {
    login.loginAs("standard");
    inventory.assertOnInventory();
  });

  it("completes checkout flow", () => {
    inventory.addItem("Sauce Labs Backpack");
    inventory.openCart();

    cart.checkout();

    checkout.fillInfo({ firstName: "Test", lastName: "User", zip: "60601" });
    checkout.continue();
    checkout.finish();

    checkout.assertOrderComplete();
  });
});