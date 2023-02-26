const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: './cypress/e2e/examples',
    specPattern: './cypress/e2e/**/*.js',
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/'
  },
});
