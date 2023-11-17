import React, { useState } from 'react'
import type { Meta } from '@storybook/react'

import { Button } from '../Button'

import { PopupBase } from '.'

const meta = {
	title: 'Components/Popup',
	component: PopupBase,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ margin: '30px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof PopupBase>

export default meta

export const Overview = () => {
	const [isVisible, setIsVisible] = useState(false)
	return (
		<Button onClick={() => setIsVisible(true)}>
			<PopupBase
				relative={false}
				visible={isVisible}
				onDismiss={() => setIsVisible(false)}
			>{`I'm the Popup`}</PopupBase>
			Click me to see the popup
		</Button>
	)
}
