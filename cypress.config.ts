import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
//const allureWriter = require('@shelex/cypress-allure-plugin');

export default defineConfig({
	e2e: {
		experimentalStudio: true,
		experimentalWebKitSupport: true,
		reporter: 'mocha-allure-reporter',
		env: {
			api_url: 'https://petstore.swagger.io/v2',
			web_url: 'https://www.bcg.com',
		},
		setupNodeEvents(on, config) {
			// implement node event listeners here
			allureWriter(on, config);
			return config;
		},
	},
});
