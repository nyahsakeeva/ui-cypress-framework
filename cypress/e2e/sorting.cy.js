import { LoginPage } from "../pages/loginPage.js";
import { InventoryPage } from "../pages/inventoryPage.js";

describe("Sorting - POM", () => {
  const login = new LoginPage();
  const inventory = new InventoryPage();

  beforeEach(() => {
    login.loginAs("standard");
    inventory.assertOnInventory();
  });

  it("sorts items A to Z", () => {
    inventory.sortBy("az");
    inventory.assertNamesSortedAZ();
  });

  it("sorts items Z to A", () => {
    inventory.sortBy("za");
    inventory.assertNamesSortedZA();
  });
});