import { describe, expect, it, vi } from 'vitest'

import { render, screen } from '../__tests__/utils'

import { Radio } from '.'

const TEST_ID = 'radio-input'

describe.concurrent('<Radio />', () => {
	it('renders correctly', () => {
		const tree = render(
			<Radio
				onChange={() => undefined}
				value="value"
				name="radio"
				label="label"
				checked
			/>,
		)

		expect(tree).toMatchSnapshot()
	})

	it.concurrent('fires onChange on click', () => {
		const handleChange = vi.fn()

		render(
			<Radio
				value={1}
				label="Are you human?"
				onChange={handleChange}
				name="radio"
				checked={false}
			/>,
		)

		const radioInput = screen.getByTestId(TEST_ID) as HTMLInputElement

		expect(radioInput.checked).toBe(false)
	})
})
