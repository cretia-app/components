import type { Meta, StoryObj } from '@storybook/react'

import { ButtonBase } from './ButtonBase'

const meta = {
	title: 'Components/Button',
	component: ButtonBase,
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Click Me!',
	},
}

export const Primary: Story = {
	args: {
		children: 'Click Me!',
		$variant: 'primary',
	},
}

export const Tertiary: Story = {
	args: {
		children: 'Click Me!',
		$variant: 'tertiary',
	},
}

export const Danger: Story = {
	args: {
		destructive: true,
		children: 'Cancel',
	},
}

export const DangerPrimary: Story = {
	args: {
		destructive: true,
		children: 'Cancel',
		$variant: 'primary',
	},
}

/** When submit prop is set to `true` the solid prop is also set to `true` */
export const Submit: Story = {
	args: {
		submit: true,
		children: 'Submit',
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
		children: 'Disabled',
	},
}
