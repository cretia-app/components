// import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ButtonBase } from './ButtonBase'

const meta = {
	title: 'Components/Button',
	component: ButtonBase,
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonBase>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
	args: {
		children: 'Click Me!',
	},
}

export const Destructive: Story = {
	args: {
		destructive: true,
		children: 'Cancel',
	},
}

/** When submit prop is set to `true` the solid prop is also set to `true` */
export const Submit: Story = {
	args: {
		submit: true,
		children: 'Submit',
	},
}
