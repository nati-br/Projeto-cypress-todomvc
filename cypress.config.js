const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://todomvc.com/examples/vue/dist/#/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
