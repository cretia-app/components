import styled from 'styled-components'

export const Container = styled.div`
	position: relative;

	button {
		padding: 4px;
		height: 36px;
		width: 50px;
		border-radius: var(--border_radius--medium);
		border: 1px solid var(--human-color--gray-4);
		&[aria-invalid] {
			border: 1px solid var(--human-color--red);
		}
	}

	.twitter-picker {
		position: absolute !important;
	}
`

export const ColorPreview = styled.div<{ value: string }>`
	background-color: ${({ value }) => value};
	width: 100%;
	height: 100%;
	border-radius: 4px;
`

export const ErrorMessage = styled.p`
	font-size: 0.85rem;
	color: var(--human-color--red);
	text-align: left;
	margin: 0px 8px;
	font-weight: 600;
	position: absolute;
	left: 0;
	top: 100%;
`
