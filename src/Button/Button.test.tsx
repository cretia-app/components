import { describe, expect, test, vi } from 'vitest'

import { fireEvent, render, screen } from '../__tests__/utils'

import { Button } from '.'

describe.concurrent('<Button />', () => {
	test('renders correctly', () => {
		const component = render(<Button />)

		expect(component).toMatchSnapshot()
	})

	test('fires onClick', () => {
		const handleClick = vi.fn()

		const { rerender } = render(<Button onClick={handleClick}>Click me</Button>)

		fireEvent(
			screen.getByText(/click me/i),
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		)

		expect(handleClick).toHaveBeenCalledTimes(1)

		rerender(
			<Button onClick={handleClick} disabled>
				Click me
			</Button>,
		)

		fireEvent(
			screen.getByText(/click me/i),
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		)

		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
