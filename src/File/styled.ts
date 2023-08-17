import styled from 'styled-components'

export const Preview = styled.div<{ $paddingless?: boolean }>`
	border: 1px solid gray;
	padding: ${({ $paddingless }) => ($paddingless ? 0 : '16px')};
	border-radius: var(--border_radius--medium);
	max-width: 250px;

	img {
		display: block;
		width: 100%;
	}
`

export const Label = styled.label<{ $hasPreview: boolean; $dark: boolean }>`
	display: inline-block;

	strong {
		display: block;
		margin-bottom: 4px;
	}

	input {
		display: ${({ $hasPreview }) => ($hasPreview ? 'none' : 'block')};
	}

	&:hover ${Preview}, &:focus ${Preview} {
		opacity: 0.8;
	}

	${Preview} {
		background-color: ${({ $dark }) => ($dark ? 'black' : 'white')};
	}
`
