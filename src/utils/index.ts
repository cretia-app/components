import { useState } from 'react'

export { default as devices } from './devices'

export function useToggle(
	initialState = false,
): [boolean, (forceValue?: any) => void] {
	const [state, setState] = useState<boolean>(initialState)

	function toggleState(forceValue?: boolean) {
		if (typeof forceValue === 'boolean') {
			setState(forceValue)
		} else {
			setState((prev) => !prev)
		}
	}

	return [state, toggleState]
}
