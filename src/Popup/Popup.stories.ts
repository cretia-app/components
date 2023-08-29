import type { Meta, StoryObj } from '@storybook/react'

import { PopupBase } from '.'

const meta = {
	title: 'Components/Popup',
	component: PopupBase,
	tags: ['autodocs'],
} satisfies Meta<typeof PopupBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { children: 'ReactNode', relative: false, visible: true },
}
