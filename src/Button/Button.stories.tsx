import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	//   backgroundColor: { control: 'color' },
	// },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Solid = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Solid.args = {
	solid: true,
	children: 'Click me',
}

export const Small = Template.bind({})
Small.args = {
	children: 'Click me',
	small: true,
}

export const Default = Template.bind({})
Default.args = {
	children: 'Click me',
	default: true,
}
