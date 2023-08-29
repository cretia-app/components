import type { Meta, StoryObj } from '@storybook/react'

import { SegmentedControlBase } from '.'

const meta = {
	title: 'Components/SegmentedControl',
	component: SegmentedControlBase,
	tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControlBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		id: '',
		name: 'Segmented Control',
		segments: [
			{ value: 'First', label: 'First' },
			{ value: 'Second', label: 'Second' },
		],
		label: 'Segmented Control',
		disabled: false,
		readOnly: false,
	},
}
