/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [viteTsconfigPaths()],
	test: {
		environment: 'happy-dom',
	},
})
