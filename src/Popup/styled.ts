import { styled } from '../utils/styled-components'

export const Container = styled.div<{ relative: boolean }>`
	position: ${({ relative }): string => (relative ? 'relative' : 'absolute')};
	z-index: 2;
`

export const Content = styled.div`
	position: absolute;
	top: 8px;
	background-color: var(--human-color--background);
	border: 1px solid var(--human-color--gray-5);
	padding: 8px 0;
	border-radius: var(--border_radius--small);
`

export const List = styled.ul`
	list-style: none;
	min-width: 250px;
`

export const Item = styled.li<{ $active?: boolean }>`
	padding: 8px 16px 8px 16px;
	width: 100%;
	position: relative;

	a {
		width: 100%;
		display: block;
	}

	&:after,
	&:before {
		position: absolute;
		bottom: 9px;
		left: 6px;
		content: '';
		display: block;
		border-radius: 50%;
	}

	${({ $active }): any =>
		typeof $active === 'boolean' &&
		`
      padding: 8px 24px 8px 32px;
      &:after {
        border: 1px solid var(--human-color--gray-3);
        width: 18px;
        height: 18px;
      }
    `}

	${({ $active }): any =>
		$active === true &&
		`
      &:before {
        width: 16px;
        height: 16px;
        bottom: 11px;
        left: 8px;
        background-color: var(--human-color--blue);
      }
    `}

  &:hover {
		background-color: var(--human-color--background-alternate);
	}

	a:hover {
		text-decoration: none;
	}
`
