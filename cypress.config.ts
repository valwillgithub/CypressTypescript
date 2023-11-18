import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
//import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild/';
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

export default defineConfig({
  e2e: {
    specPattern: '**/e2e/**/*.{feature,ts,cy.js}',
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    env: {
      api_url: 'https://petstore.swagger.io/v2',
      web_url: 'https://www.bcg.com',
    },
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
