import styled, { css } from 'styled-components'

export type ButtonParameters = {
	small?: boolean
	solid?: boolean
	$center?: boolean
	disabled?: boolean
	$destructive?: boolean
	$transparent?: boolean
}

export const ButtonStyle = css<ButtonParameters>`
	border: none;
	height: 32px;
	display: flex;
	cursor: default;
	white-space: pre;
	font-weight: 500;
	font-size: 0.9rem;
	border-radius: var(--border_radius--medium);
	align-items: center;
	gap: 4px;
	color: var(--human-color--blue);
	padding: 0 calc(var(--space--small) + var(--space--micro));
	justify-content: ${({ $center }) => ($center ? 'center' : undefined)};
	background-color: ${({ $destructive, disabled }) =>
		disabled
			? 'var(--human-color--gray-6)'
			: $destructive
			? 'rgb(255,45,85,0.1)'
			: 'var(--human-color--overlay-blue)'};

	svg {
		stroke-width: 2.5;
		width: 18px;
		height: 18px;
	}
`

export const Container = styled.button<ButtonParameters>`
	${ButtonStyle}

	&:active {
		opacity: 0.5;
	}

	&:not([readonly]):focus,
	&:not([readonly]):hover {
		${({ $transparent, disabled }) =>
			$transparent
				? 'background-color: var(--human-color--overlay-blue)'
				: disabled
				? undefined
				: 'box-shadow: 0 0 0 1.5px var(--human-color--blue)'};
		text-decoration: none;
	}

	${({ small }) =>
		small &&
		`
      padding: 1px var(--space--small);
      border-radius: var(--border_radius--medium);
      height: auto;
    `}

	${({ solid, disabled, $destructive }) =>
		solid &&
		css`
			border-color: var(--human-color--blue);
			background-color: var(
				--human-color--${disabled ? 'gray' : $destructive ? 'red' : 'blue'}
			);
			color: white;

			&:not([readonly]):hover {
				color: white;
			}
		`}

  ${({ $destructive, solid }) =>
		$destructive &&
		css`
			border-color: var(--human-color--red);
			color: var(--human-color--${solid ? 'white' : 'red'});

			&:not([readonly]):focus,
			&:not([readonly]):hover {
				box-shadow: 0 0 0 1.5px var(--human-color--red);
			}
		`}

 

  ${({ $transparent }) => $transparent && `background-color: transparent;`}

  ${({ solid, disabled }) =>
		disabled &&
		css`
			cursor: not-allowed;
			border-color: var(--human-color--gray) !important;
			color: ${solid ? 'white' : 'var(--human-color--gray)'};
		`}
`
