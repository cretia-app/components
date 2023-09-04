import type { Preview } from '@storybook/react'

import '../src/styles/global.css'

const preview: Preview = {
	parameters: {
		layout: 'centered',
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
