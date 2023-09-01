import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from '.'

const meta: Meta<typeof Tag> = {
	title: 'Components/Tag',
	component: Tag,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tag>

/**Tag color changes with the value of the `$type` prop
 *
 * available options are `[ 'error' | 'warn' | 'success' | 'default' | 'extra' | 'low' | 'medium' | 'high']`
 *
 */

export const Primary: Story = {
	args: {
		children: 'Overview Tag',
	},
}

export const Success: Story = {
	args: {
		$type: 'success',
		children: 'Success Tag',
	},
}
export const ErrorTag: Story = {
	args: {
		$type: 'error',
		children: 'Error Tag',
	},
}
