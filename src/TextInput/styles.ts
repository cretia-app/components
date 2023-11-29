import { styled } from '../utils/styled-components'

export const TextInputContainer = styled.div<{
	$prefix?: string
	$postfix?: string
}>`
	display: flex;
	flex-direction: column;
	position: relative;

	&:before,
	&:after {
		position: absolute;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 20px;
		box-sizing: border-box;
		display: flex;
		align-items: flex-end;
		font-weight: 600;
	}

	${({ $prefix }) =>
		$prefix &&
		`
    &:before {
      content: "${$prefix}";
      left: 0;
      padding: 0 0 7.5px 6px;
    `}
	${({ $postfix }) =>
		$postfix &&
		`
    &:after {
      content: "${$postfix}";
      right: 0;
      padding: 0 6px 7.5px 0;
    `}

  textarea {
		max-width: 100%;
	}
`

export const HintIcon = styled.div`
	width: 16px;
	height: 16px;
	background-color: var(--human-color--gray-3);
	border-radius: var(--border_radius--medium);
	color: white;
	font-size: 0.7rem;
	text-align: center;
	font-weight: bold;
	font-family: 'Helvetica Neue', Helvetica, Arial;
`

export const LabelContainer = styled.div`
	font-weight: 600;
	display: block;
	text-align: left;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.95rem;
`

export const Input = styled.input<{
	$align?: string
	$borderless?: boolean
	$prefix?: boolean
	$postfix?: boolean
	$isSearch?: boolean
}>`
	text-align: ${({ $align }) => $align};
	padding: 6px 8px;
	padding-left: ${({ $prefix, $isSearch }) =>
		$isSearch ? '30px' : $prefix ? '20px' : undefined};
	padding-right: ${({ $postfix }) => ($postfix ? '20px' : undefined)};
	width: 100%;
	border: ${({ $borderless }) =>
		!$borderless && '1px solid var(--human-color--gray-4)'};
	background-color: var(--human-color--background);
	color: var(--human-color--text);
	background-color: transparent;
	appearance: none;
	font-size: 1rem;
	outline: none;
	border-radius: var(--border_radius--medium);

	&:focus:not([readonly]) {
		border-color: var(--human-color--blue);
		box-shadow: 0 0 0 1.5px var(--human-color--blue);
		&[aria-invalid] {
			border-color: var(--human-color--red);
		}
		&[readonly] {
			color: var(--human-color--text);
			border-color: var(--human-color--gray-6);
			outline: none;
		}
	}
`
