import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
	component: Button,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		children: 'Click Me!',
	},
}

export const Destructive: Story = {
	args: {
		destructive: true,
		children: 'Danger!',
	},
}
