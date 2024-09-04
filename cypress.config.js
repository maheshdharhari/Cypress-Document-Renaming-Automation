const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
	   redirectionLimit: 300, 
	  baseUrl:'https://maheshyadav.com.np',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});