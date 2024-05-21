const { defineConfig } = require("cypress");
module.exports = defineConfig({
  defaultCommandTimeout: 100000,
  pageLoadTimeout: 100000,
  viewportHeight: 800,
  viewportWidth: 1500,
  chromeWebSecurity: false,
  video: false,
  experimentalNetworkStubbing: true,
  watchForFileChanges: true,
  e2e: {
    baseUrl: "https://mplify-stage-dev.surge.sh/#/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
