import type { Meta, StoryObj } from '@storybook/react'

import { RadioBase } from '.'

const meta = {
	title: 'Components/Radio',
	component: RadioBase,
	tags: ['autodocs'],
} satisfies Meta<typeof RadioBase>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
	args: {
		value: 'option 1',
		checked: false,
		name: 'option 1',
		label: 'option 1',
	},
}
