import type { Meta, StoryObj } from '@storybook/react'

import { FileBase } from '.'

const meta = {
	title: 'Components/File',
	component: FileBase,
	tags: ['autodocs'],
} satisfies Meta<typeof FileBase>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
	args: { name: 'helloworld.pdf', value: 'helloworld.pdf', label: '' },
}
