import React, { useState } from 'react'
import type { Meta } from '@storybook/react'

import { ColorPickerBase } from '.'

const meta = {
	title: 'Components/ColorPicker',
	component: ColorPickerBase,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ marginBottom: '80px', marginTop: '30px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ColorPickerBase>

export default meta

export const Overview = () => {
	const [value, setValue] = useState('#fff')
	return (
		<>
			<p>Pick a color:</p>
			<ColorPickerBase
				value={value}
				name={'Color Picker'}
				onChange={(e) => setValue(e.target.value)}
			/>
		</>
	)
}
