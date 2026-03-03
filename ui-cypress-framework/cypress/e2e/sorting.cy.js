import { inventoryObjects } from "../support/objects";

describe("Sorting Advanced", () => {

  beforeEach(() => {
    cy.loginAs("standard");
  });

  const SORT = {
    nameZA: "za",
    priceHighLow: "hilo"
  };

  const getNames = () =>
    cy.get(inventoryObjects.inventoryItemName).then(($els) =>
      [...$els].map((el) => el.innerText.trim())
    );

  it("changes ordering when switching sort options", () => {

    getNames().then((original) => {

      cy.get(inventoryObjects.sortDropdown).select(SORT.nameZA);

      getNames().then((za) => {

        expect(za).to.not.deep.equal(original);

        const expected = [...za].sort((a, b) => b.localeCompare(a));
        expect(za).to.deep.equal(expected);

      });
    });

  });

  it("price high-to-low is correctly sorted", () => {

    cy.get(inventoryObjects.sortDropdown).select(SORT.priceHighLow);

    const prices = [];

    cy.get(inventoryObjects.inventoryItemPrice)
      .each(($el) => prices.push(Number($el.text().replace("$", ""))))
      .then(() => {
        const expected = [...prices].sort((a, b) => b - a);
        expect(prices).to.deep.equal(expected);
      });

  });

});