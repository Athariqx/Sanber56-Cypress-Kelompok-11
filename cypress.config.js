const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    browser: "chrome", //bisa dihapus atau jadikan komentar jika di kalian ada kendala saat cypress running 
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotOnRunFailure : false
  },
});
