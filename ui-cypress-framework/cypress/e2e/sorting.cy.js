import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

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