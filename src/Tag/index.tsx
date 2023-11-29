import { styled } from '../utils/styled-components'

const tagTypeColors = {
	error: 'var(--human-color--red)',
	warn: 'var(--human-color--yellow)',
	success: 'var(--human-color--green)',
	default: 'var(--human-color--blue)',
	extra: 'var(--human-color--gray)',

	low: 'var(--human-color--green)',
	medium: 'var(--human-color--yellow)',
	high: 'var(--human-color--red)',
}

/**
 * A rounded rectangle inline label.
 */

export const Tag = styled.span<{
	$type?:
		| 'error'
		| 'warn'
		| 'success'
		| 'default'
		| 'extra'
		| 'low'
		| 'medium'
		| 'high'
	$upperCase?: boolean
	$small?: boolean
}>`
	display: inline;
	font-weight: 600;
	font-size: ${({ $small }) => ($small ? '0.7rem' : '0.8rem')};
	color: ${({ $type }): string => ($type === 'warn' ? 'black' : 'white')};
	padding: ${({ $small }) => ($small ? '1.5px 7px' : '4px 11px')};
	border-radius: var(--border_radius--medium);
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
	text-transform: ${({ $upperCase }) => $upperCase && 'uppercase'};
	background-color: ${({ $type }) =>
		($type && tagTypeColors[$type]) || 'var(--human-color--blue)'};
	white-space: nowrap;

	&[href] {
		padding-right: 32px;
		position: relative;
		text-decoration: none;
		&:hover {
			opacity: 0.8;
		}
	}

	svg {
		display: inline-block;
		height: 12px;
		width: 12px;
		margin-right: 8px;
		transform: scale(1.3) translateY(1px);
	}
`
