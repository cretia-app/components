import type { Meta, StoryObj } from '@storybook/react'

import { PillBase } from '.'

const meta = {
	title: 'Components/Pill',
	component: PillBase,
	tags: ['autodocs'],
} satisfies Meta<typeof PillBase>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
	args: { message: 'This is a message in a Pill' },
	parameters: {
		layout: 'padded',
	},
}
