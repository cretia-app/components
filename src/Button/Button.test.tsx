import { describe, expect, test, vi } from 'vitest'

import { fireEvent, render, screen } from '@/utils/test'

import { Button } from '.'

describe('<Button />', () => {
	test('renders correctly', () => {
		const component = render(<Button />)

		expect(component).toMatchSnapshot()
	})

	test('fires onClick', () => {
		const handleClick = vi.fn()

		const { rerender } = render(
			<Button onClick={handleClick} title="click me" />,
		)

		fireEvent(
			screen.getByText(/click me/i),
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		)

		expect(handleClick).toHaveBeenCalledTimes(1)

		rerender(<Button onClick={handleClick} title="click me" disabled />)

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
