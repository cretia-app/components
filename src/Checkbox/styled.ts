import styled from 'styled-components'

export const Label = styled.label`
	display: flex;
	justify-items: center;
	text-align: left;
	font-size: 1rem;
	align-items: center;
	font-weight: 500;

	[readonly] {
		cursor: default;
	}
`
