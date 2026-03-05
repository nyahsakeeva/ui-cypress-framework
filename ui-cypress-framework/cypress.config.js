const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
  const grepPlugin = require("@cypress/grep/plugin");
  const pluginFn =
    (typeof grepPlugin === "function" && grepPlugin) ||
    grepPlugin.plugin ||
    grepPlugin.default;

  if (typeof pluginFn !== "function") {
    throw new Error(
      "Could not load @cypress/grep plugin function. Check installed version/export."
    );
  }

  pluginFn(config);
  return config;
},

    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    fixturesFolder: "cypress/fixtures",

    screenshotsFolder: "cypress/reports/screenshots",
    videosFolder: "cypress/reports/videos",
    video: true,
    screenshotOnRunFailure: true,
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});