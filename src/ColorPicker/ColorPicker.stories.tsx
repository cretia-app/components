import type { Meta, StoryObj } from '@storybook/react'

import { ColorPickerBase } from '.'

const meta = {
	title: 'Components/ColorPicker',
	component: ColorPickerBase,
	tags: ['autodocs'],
} satisfies Meta<typeof ColorPickerBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { name: 'helloworld', value: '#fff' },
}
