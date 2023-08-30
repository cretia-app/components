import { create } from '@storybook/theming/create'

export const ui = create({
	base: 'light',
	brandTitle: 'Cretia Design System',
	brandUrl: 'https://github.com/cretia-app/components',
	brandImage: require('./cretia-logo.png'),
	brandTarget: '_self',

	appBg: '#F8F8F8',

	// Toolbar default and active colors
	barTextColor: 'rgb(28, 28, 30)',
	barSelectedColor: 'rgb(10, 132, 255)',
})
