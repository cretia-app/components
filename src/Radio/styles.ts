import styled from 'styled-components'

export const Label = styled.label`
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;

	input {
		margin-right: 4px;
	}

	&:focus:not([readonly]) {
		border-color: var(--human-color--blue);
	}
`
