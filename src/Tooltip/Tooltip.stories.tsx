import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Tooltip } from '.'

export default {
	title: 'Components/Tooltip',
	component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
	<Tooltip {...args}>
		<p>Hover me</p>
	</Tooltip>
)

export const Default = Template.bind({})

Default.args = {
	content: 'Click me',
}
