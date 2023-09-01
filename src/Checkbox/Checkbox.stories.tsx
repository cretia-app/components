import React, { useState } from 'react'
import type { Meta } from '@storybook/react'

import { CheckboxBase } from '.'

const meta = {
	title: 'Components/Checkbox',
	component: CheckboxBase,
	tags: ['autodocs'],
} satisfies Meta<typeof CheckboxBase>

export default meta

export const Overview = () => {
	const [isChecked, setIsChecked] = useState(true)
	return (
		<CheckboxBase
			label={'Is Checked'}
			value={'checked'}
			checked={isChecked}
			name="isChecked"
			onChange={() => {
				setIsChecked((prevState) => !prevState)
			}}
		/>
	)
}
