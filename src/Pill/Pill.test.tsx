import { describe, expect, it } from 'vitest'

import { render } from '@/__tests__/utils'

import { Pill } from '.'

describe.concurrent('<Pill />', () => {
	it('renders correctly', () => {
		const tree = render(<Pill message="Think different" />)

		expect(tree).toMatchSnapshot()
	})
})
