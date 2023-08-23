import { describe, expect, it } from 'vitest'

import { render } from '@/__tests__/utils'

import { Tag } from '.'

describe('<Tag />', () => {
	it('renders correctly', () => {
		const tree = render(<Tag />)

		expect(tree).toMatchSnapshot()
	})
})
