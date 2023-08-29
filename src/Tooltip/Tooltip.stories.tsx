import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TooltipBase } from '.'

export default {
	title: 'Components/Tooltip',
	component: TooltipBase,
	tags: ['autodocs'],
} as ComponentMeta<typeof TooltipBase>

const Template: ComponentStory<typeof TooltipBase> = (args) => (
	<TooltipBase {...args}>
		<p>Hover me</p>
	</TooltipBase>
)

export const Default = Template.bind({})

Default.args = {
	content: 'Click me',
}
