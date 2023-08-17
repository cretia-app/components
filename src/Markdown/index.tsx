import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CustomMarkdown = (props: any) => (
	<ReactMarkdown
		components={{
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			a: ({ _node, ...props }: any) => {
				return props.href.match(/^\//) ? (
					<Link to={props?.href ?? ''}>{props.children}</Link>
				) : (
					<a href={props.href}>{props.children}</a>
				)
			},
		}}
		skipHtml
		{...props}
	/>
)

export const Markdown = styled(CustomMarkdown)`
	white-space: pre-line;

	a {
		color: var(--human-color--blue);
		text-decoration: underline;
	}

	blockquote {
		border-left: var(--space--nano) solid var(--human-color--gray-6);
		padding: var(--space--small) var(--space--medium);
		color: var(--human-color--text-secondary);
		font-size: 0.9rem;
	}
`
