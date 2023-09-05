import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { DropdownButtonBase } from './DropDown'

const meta = {
	title: 'Components/Dropdown',
	component: DropdownButtonBase,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ margin: '35px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof DropdownButtonBase>

export default meta

type Story = StoryObj<typeof meta>

/**Same props of the component `Button` with an aditional one
 *
 * `ìtems` used to render the dropdown content
 *
 * `items: [{children: 'Dropdown Item #1', ...otherProps}, {children: 'Dropdown Item #2', ...otherProps}]`
 */

export const Overview: Story = {
	args: {
		children: 'Dropdown Button',
		items: [{ children: 'Dropdown Item #1' }, { children: 'Dropdown Item #2' }],
	},
}
