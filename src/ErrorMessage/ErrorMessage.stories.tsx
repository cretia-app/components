import React from 'react'
import type { Meta } from '@storybook/react'

import { TextInput } from '../TextInput'

import { ErrorMessage } from '.'

const meta = {
	title: 'Components/Error Message',
	component: ErrorMessage,
	tags: ['autodocs'],
} satisfies Meta<typeof ErrorMessage>

export default meta

/** display an error message that matches your components*/

export const Overview = () => {
	return <TextInput label="Name" error={`Required`} />
}
