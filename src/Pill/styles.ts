import styled from 'styled-components'

const Container = styled.div`
	background-color: var(--human-color--gray-7);
	padding: 8px 12px;
	border-radius: var(--border_radius--medium);
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	font-weight: 500;
	margin: 8px 0 16px;

	svg {
		height: 18px;
		width: 18px;
		margin-right: 8px;
	}
`

const Icon = styled.img`
	height: 18px;
	width: 18px;
	margin-right: 8px;
`

export { Container, Icon }
