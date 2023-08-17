import { describe, expect, it } from 'vitest'

import { render } from '@/utils/test'

import { Pill } from '.'

describe('<Pill />', () => {
	it('renders correctly', () => {
		const tree = render(<Pill message="Think different" />)

		expect(tree).toMatchSnapshot()
	})
})
