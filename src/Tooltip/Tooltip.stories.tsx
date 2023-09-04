import React from 'react'

import { TooltipBase } from '.'

export default {
	title: 'Components/Tooltip',
	component: TooltipBase,
	tags: ['autodocs'],
}

const Template = (args) => (
	<TooltipBase {...args}>
		<p>Hover me</p>
	</TooltipBase>
)

export const Overview = Template.bind({})

Overview.args = {
	content: 'Click me',
}
