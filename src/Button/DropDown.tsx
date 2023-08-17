import type { ComponentProps } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { IconChevronDown } from '@tabler/icons-react'
import styled from 'styled-components'

import { Flex } from '@/system'

import { baseButtonStyles, Container } from './styled'
import { Button } from '.'

type Props = ComponentProps<typeof Button> & {
	items: ({
		children?: any
	} & ComponentProps<typeof DropdownMenu.Item>)[]
}

const Wrapper = styled<any>(Flex)`
	${baseButtonStyles}

	padding: 0;
	overflow: hidden;

	> ${Container} {
		all: unset;
		display: flex;
		align-items: center;
		padding: 0 12px;
	}
`

const Trigger = styled(DropdownMenu.Trigger)`
	border-left: 1px solid var(--human-color--gray-4);
	padding-left: 2px;
	height: 100%;
	display: flex;
	align-items: center;
	align-content: center;
	width: 100%;

	&:focus:not([readonly]),
	&:active:not([readonly]) {
		box-shadow: none;
		border-color: inherit;
		outline: none;

		svg {
			color: var(--human-color--blue);
		}
	}
	&[data-state='open'] {
		background-color: var(--human-color--gray-5);
	}
`

const Item = styled(Container)`
	border-radius: none;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid var(--human-color--gray-4);
`

const Content = styled(DropdownMenu.Content)`
	--border--radius: 8px;

	flex-direction: column;
	background-color: transparent;
	box-shadow: var(--box-shadow--popup);
	border-radius: var(--border--radius);
	border: 1px solid var(--human-color--gray-4);

	${Item}:first-child {
		border-radius: var(--border--radius) var(--border--radius) 0 0;
	}
	${Item}:last-child {
		border-bottom: 0;
		border-radius: 0 0 var(--border--radius) var(--border--radius);
	}
`

function DropdownButtonBase(props: Props) {
	return (
		<Wrapper>
			<Button {...props} />
			<DropdownMenu.Root>
				<Trigger>
					<IconChevronDown strokeWidth={2} />
				</Trigger>
				<DropdownMenu.Portal style={{ backgroundColor: 'transparent' }}>
					<Content>
						{props.items.map(({ children, ...item }, index) => (
							<Item as={DropdownMenu.Item} {...item} key={index}>
								{children}
							</Item>
						))}
					</Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</Wrapper>
	)
}

export const DropdownButton = styled(DropdownButtonBase)``
