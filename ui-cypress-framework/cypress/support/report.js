import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const specName = Cypress.spec.name;
    const fullTitle = runnable.parent.title
      ? `${runnable.parent.title} -- ${test.title}`
      : test.title;

    // Mochawesome screenshot naming is typically:
    // "cypress/reports/screenshots/<spec>/<suite> -- <test> (failed).png"
    const screenshotFileName = `${specName}/${fullTitle} (failed).png`;
    const screenshotPath = `cypress/reports/screenshots/${screenshotFileName}`;

    addContext({ test }, screenshotPath);
  }
});