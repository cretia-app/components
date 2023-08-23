import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
	cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) =>
	render(ui, {
		...options,
	}) as any

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render2as9jd8s }
