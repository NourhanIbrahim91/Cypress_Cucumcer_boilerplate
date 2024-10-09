const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const fs = require('fs');
const path = require('path')

// get custom configuration files for different environment (dev,staging,prod..)
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress-cucumber-boilerplate\\config', `${file}.json`)

  if(!fs.existsSync(pathToConfigFile)){

    console.log("No custom config file found")
    return {}
  }

  return fs.readJson(pathToConfigFile)
}

async function setupNodeEvents(on, config) {

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

// This is required for switch between multiple configuration files
  //const file = config.env.configFile || ''
  //return getConfigurationByFile(file)

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  on('task', {
    log(message) {
      console.log(message)

      return null
    },
    table(message) {
      console.table(message)

      return null
    }
  })

  //Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "4k53ur",
  e2e: {
    setupNodeEvents,
    //specPattern: "cypress/e2e/features/*.feature",
    specPattern: "cypress/e2e",
    //baseUrl: "",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
      chromeWebSecurity: false,
      experimentalSessionAndOrigin : true
    },
    viewportHeight: 1000,
    viewportWidth: 1900,
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  }
});


