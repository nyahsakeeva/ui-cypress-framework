import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";

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