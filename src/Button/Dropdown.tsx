import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { IconChevronDown } from '@tabler/icons-react'
import type { ComponentProps } from 'react'

import { styled } from '../utils/styled-components'

import { Flex } from '../system'

import { ButtonStyle, Container } from './styled'
import { Button } from '.'

type Props = ComponentProps<typeof Button> & {
	items: ComponentProps<typeof DropdownMenu.Item>[]
}

const Wrapper = styled<any>(Flex)`
	${ButtonStyle}

	padding: 0;
	gap: 0;

	> ${Container} {
		border-radius: var(--border_radius--medium) 0 0 var(--border_radius--medium);

		&:active:not(:disabled):not([readonly]),
		&:focus:not(:disabled):not([readonly]) {
			box-shadow: 0 0 0 2px var(--color--outline);
		}
	}
`

const Trigger = styled(DropdownMenu.Trigger)`
	${ButtonStyle};

	border: inherit;
	border-radius: 0 var(--border_radius--medium) var(--border_radius--medium) 0;
	border-left: 1px solid var(--human-color--blue-200);
	height: 100%;
	align-content: center;
	width: 100%;
	min-width: 32px;
	justify-content: center;
	padding: 0 2px 0 0;

	&:active:not(:disabled):not([readonly]),
	&:focus:not(:disabled):not([readonly]) {
		box-shadow: 0 0 0 2px var(--color--outline);
	}
`

const Item = styled(Container)`
	border-radius: none;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid var(--human-color--gray-5);
`

const Content = styled(DropdownMenu.Content)`
	--border--radius: 8px;

	flex-direction: column;
	background-color: var(--human-color--background);
	box-shadow: var(--box-shadow--popup);
	border-radius: var(--border--radius);
	border: 1px solid var(--human-color--gray-5);

	${Item}:first-child {
		border-top-right-radius: var(--border--radius);
		border-top-left-radius: var(--border--radius);
	}
	${Item}:last-child {
		border-bottom: 0;
		border-bottom-right-radius: var(--border--radius);
		border-bottom-left-radius: var(--border--radius);
	}
`

export function DropdownButtonBase({ items, ...props }: Props) {
	if (!items || !items.length) {
		return <Button {...props} />
	}

	return (
		<Wrapper>
			<Button {...props} />
			<DropdownMenu.Root>
				<Trigger disabled={props.disabled}>
					<IconChevronDown strokeWidth={2} />
				</Trigger>
				<DropdownMenu.Portal>
					<Content sideOffset={4} align="end">
						{items.map(({ children, ...item }, index) => (
							<Item
								$variant="tertiary"
								as={DropdownMenu.Item}
								{...item}
								key={index}
							>
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
