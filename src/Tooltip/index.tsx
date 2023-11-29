import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { styled } from '../utils/styled-components'

const StyledContent = styled(TooltipPrimitive.Content)`
	border-radius: var(--space--small);
	padding: var(--space--small) var(--space--medium);
	font-size: 0.9rem;
	line-height: 1;
	background-color: var(--human-color--background);
	box-shadow: var(--box-shadow--popup);
`

// Exports
const TooltipProvider = TooltipPrimitive.Provider
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = StyledContent

interface Props {
	/** Content inside rhe tooltip*/
	content: React.ReactNode | string
	/** The root node of JSX passed into Tooltip as children will act as the tooltip trigger */
	children: React.ReactNode
	/** Sets prefferred side of the trigger the tooltip should appear */
	side?: 'top' | 'right' | 'bottom' | 'left'
}

/**
 * Renders a tooltip on hover or focus of a trigger.
 *
 * The tooltip will position itself based on the `side` prop.
 */

export function TooltipBase({ content = '', children, side = 'top' }: Props) {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root delayDuration={0}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent side={side} sideOffset={5}>
					{content}
				</TooltipContent>
			</TooltipPrimitive.Root>
		</TooltipProvider>
	)
}

export const Tooltip = styled(TooltipBase)``
