import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import styled from 'styled-components'

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

function TooltipBase({
	content,
	children,
	side = 'top',
}: {
	content: React.ReactNode | string
	children: React.ReactNode
	side?: 'top' | 'right' | 'bottom' | 'left'
}) {
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
