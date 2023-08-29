import type { Meta, StoryObj } from '@storybook/react'

import { RadioBase } from '.'

const meta = {
	title: 'Components/Radio',
	component: RadioBase,
	tags: ['autodocs'],
} satisfies Meta<typeof RadioBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { value: 'any', checked: false, name: 'string', label: 'string' },
}
