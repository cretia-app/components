import React, { useState } from 'react'
import type { Meta } from '@storybook/react'

import { SegmentedControlBase } from '.'

const meta = {
	title: 'Components/SegmentedControl',
	component: SegmentedControlBase,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof SegmentedControlBase>

export default meta

export const Overview = () => {
	const [value, setValue] = useState('')
	return (
		<SegmentedControlBase
			value={value ? value : 'First'}
			segments={[
				{ value: 'First', label: 'First' },
				{ value: 'Second', label: 'Second' },
			]}
			name="Options"
			onChange={(e) => {
				setValue(e.target.value)
			}}
		/>
	)
}
