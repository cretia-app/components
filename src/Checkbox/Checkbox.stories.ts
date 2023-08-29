import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxBase } from '.'

const meta = {
	title: 'Components/Checkbox',
	component: CheckboxBase,
	tags: ['autodocs'],
} satisfies Meta<typeof CheckboxBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		name: '',
		checked: true,
	},
}
