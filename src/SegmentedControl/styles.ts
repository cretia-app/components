import { styled } from '../utils/styled-components'

export const Content = styled.label`
	display: flex;
	border: 1px solid var(--human-color--gray-4);
	border-radius: var(--border_radius--medium);
	padding: 1px;
	overflow: hidden;
	background-color: var(--human-color--gray-5);
`

export const Segment = styled.button<{ selected: boolean }>`
	flex: 1;
	font-weight: 500;
	font-size: 0.9rem;
	padding: 6px 4px;
	color: var(--human-color--text);
	border-radius: var(--border_radius--medium);
	border: none;
	background-color: ${({ selected }) =>
		selected && 'var(--human-color--background)'};
	box-shadow: ${({ selected }) => selected && '0 0 4px rgba(0, 0, 0, 0.3)'};
`

export const Container = styled.div`
	font-weight: 500;
	text-align: left;
	display: block;
`
