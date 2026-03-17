import { defineConfig } from "cypress";
import { plugin as cypressGrepPlugin } from '@cypress/grep/plugin'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressGrepPlugin(config)
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