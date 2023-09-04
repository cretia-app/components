import type { Meta, StoryObj } from '@storybook/react'

import { TextInput } from '.'

const meta = {
	title: 'Components/Text Input',
	component: TextInput,
	tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
	args: {
		label: 'Text Input',
		$align: 'center',
		placeholder: 'Write something here',
	},
}

/**Set the `multiline` prop to true and write as many lines as you like */

export const Multiline: Story = {
	args: {
		label: 'Multiline Text Input',
		$align: 'center',
		placeholder: 'Write multiple lines in the same text input',
		multiline: true,
	},
}
