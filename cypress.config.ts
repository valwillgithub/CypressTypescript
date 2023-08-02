import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		experimentalStudio: true,
		experimentalWebKitSupport: true,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
