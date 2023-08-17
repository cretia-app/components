import { describe, expect, it } from 'vitest'

import { render } from '@/utils/test'

import { Tag } from '.'

describe('<Tag />', () => {
	it('renders correctly', () => {
		const tree = render(<Tag />)

		expect(tree).toMatchSnapshot()
	})
})
