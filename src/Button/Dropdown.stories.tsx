import type { Meta, StoryObj } from '@storybook/react'

import { DropdownButton } from './Dropdown'

const meta = {
	title: 'Components/Button/Dropdown',
	component: DropdownButton,
	tags: ['autodocs'],
} satisfies Meta<typeof DropdownButton>

export default meta

type Story = StoryObj<typeof meta>

/**Same props of the component `Button` with an aditional one
 *
 * `ìtems` used to render the dropdown content
 *
 * `items: [{children: 'Dropdown Item #1', ...otherProps}, {children: 'Dropdown Item #2', ...otherProps}]`
 */

export const Dropdown: Story = {
	args: {
		children: 'Dropdown Button',
		items: [{ children: 'Dropdown Item #1' }, { children: 'Dropdown Item #2' }],
	},
}

export const SingleDropdown: Story = {
	args: {
		children: 'Dropdown Button',
		items: [{ children: 'Dropdown Item #1' }],
	},
}

export const NoOptionsDropdown: Story = {
	args: {
		children: 'Dropdown Button',
		items: [],
	},
}

export const Disabled: Story = {
	args: {
		children: 'Dropdown Button',
		disabled: true,
		items: [],
	},
}
