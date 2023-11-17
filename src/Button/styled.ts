import styled, { css } from 'styled-components'

export type ButtonParameters = {
	small?: boolean
	/**
	 * @deprecated use '$variant'
	 */
	solid?: boolean
	$center?: boolean
	disabled?: boolean
	/**
	 * @deprecated use '$danger'
	 */
	$destructive?: boolean
	$danger?: boolean
	/** @deprecated use '$variant' */
	$transparent?: boolean
	$variant?: 'primary' | 'secondary' | 'tertiary'
}

export const ButtonStyle = css<ButtonParameters>`
	--color--text: var(--human-color--blue-500);
	--color--background: var(--human-color--blue-50);
	--color--outline: var(--color--text);
	--color--background__hover: var(--human-color--blue-100);

	&:disabled {
		--color--background: var(--human-color--gray-6);
		--color--text: var(--human-color--gray-4);
	}

	${({
		solid,
		$transparent,
		$variant = solid ? 'primary' : $transparent ? 'tertiary' : 'secondary',
	}) =>
		$variant === 'primary'
			? css`
					--color--text: var(--human-color--blue-50);
					--color--background: var(--human-color--blue-500);
					--color--outline: var(--human-color--blue-300);
					--color--background__hover: var(--human-color--blue-600);
			  `
			: $variant === 'tertiary'
			? css`
					--color--background: transparent;
					--color--background__hover: var(--human-color--blue-100);
			  `
			: undefined}

	${({
		$destructive,
		solid,
		$transparent,
		$variant = solid ? 'primary' : $transparent ? 'tertiary' : 'secondary',
		$danger = $destructive,
	}) =>
		$danger &&
		css`
			--color--text: var(--human-color--red-500);
			--color--background: var(--human-color--red-50);
			--color--background__hover: var(--human-color--red-100);

			${$variant === 'primary'
				? css`
						--color--text: var(--human-color--red-50);
						--color--background: var(--human-color--red-500);
						--color--outline: var(--human-color--red-300);
						--color--background__hover: var(--human-color--red-600);
				  `
				: $variant === 'tertiary'
				? css`
						--color--background: transparent;
						--color--background__hover: var(--human-color--red-100);
				  `
				: undefined}
		`}

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
	color: var(--color--text);
	padding: 0 calc(var(--space--small) + var(--space--micro));
	justify-content: ${({ $center }) => ($center ? 'center' : undefined)};
	background-color: var(--color--background);
	outline: none;

	&:hover:not(:disabled):not([readonly]),
	&[data-state='open']:not(:disabled):not([readonly]) {
		background-color: var(--color--background__hover);
	}

	svg {
		stroke-width: 2.5;
		width: 18px;
		height: 18px;
	}
`

export const Container = styled.button<ButtonParameters>`
	${ButtonStyle}

	&:active:not(:disabled):not([readonly]),
	&:focus:not(:disabled):not([readonly]) {
		box-shadow: 0 0 0 2px var(--color--outline);
	}
	&:active:not(:disabled):not([readonly]) {
		background-color: var(--color--background__hover);
	}

	${({ small }) =>
		small &&
		css`
			padding: 1px var(--space--small);
			border-radius: var(--border_radius--medium);
			height: auto;
		`}
`
