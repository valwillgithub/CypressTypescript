import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
//import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';
import browserify from '@cypress/browserify-preprocessor';

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript'),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  allureWriter(on, config);
  return config;
}

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    reporter: 'mocha-allure-reporter',
    specPattern: '**/*.feature',
    env: {
      api_url: 'https://petstore.swagger.io/v2',
      web_url: 'https://www.bcg.com',
    },
    setupNodeEvents,

    //setupNodeEvents(on, config) {
    // implement node event listeners here
    //   allureWriter(on, config);
    //   return config;
    //},
  },
});
