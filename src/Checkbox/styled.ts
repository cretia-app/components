import { styled } from '../utils/styled-components'

export const Label = styled.label`
	display: flex;
	justify-items: center;
	text-align: left;
	font-size: 1rem;
	align-items: center;
	font-weight: 500;
	color: var(--human-color--text);
	&:focus:not([readonly]) {
		border-color: var(--human-color--blue);
	}
	[readonly] {
		cursor: default;
	}
`
