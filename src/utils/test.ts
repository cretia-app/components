import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
	cleanup()
})

// vi.mock('lottie-react', () => ({ default: () => null }))

const customRender = (ui: React.ReactElement, options = {}) =>
	render(ui, {
		...options,
	})

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
