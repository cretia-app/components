import { forwardRef, ReactNode, useEffect, useRef } from 'react'
import { styled } from 'styled-components'

import * as Styled from './styled'

interface Props {
	/** information that will be shown */
	children: ReactNode
	/** what happens when the click occurs outside the popup */
	onDismiss: () => void
	/** when set to `true` the popup is relative to it's parent */
	relative: boolean
	/** when set to `true` the popup is visible
	 *
	 * be sure to change this value with the onDismiss function
	 *
	 * so the popup becomes not visible
	 */
	visible: boolean
}

export const PopupBase = forwardRef(function TooltipComponent(
	{ children, onDismiss, visible = true, ...moreProps }: Props,
	ref: any,
) {
	const tooltipRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutside(event: any): void {
			if (
				visible &&
				tooltipRef &&
				!tooltipRef.current?.contains(event.target) &&
				!ref?.current?.contains(event.target)
			) {
				event.stopPropagation()
				onDismiss()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return (): void => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [tooltipRef, onDismiss, ref, visible])

	return (
		<Styled.Container
			ref={tooltipRef}
			aria-hidden={!visible}
			hidden={!visible}
			{...moreProps}
		>
			<Styled.Content>
				<Styled.List>{children}</Styled.List>
			</Styled.Content>
		</Styled.Container>
	)
})

export const Popup = styled(PopupBase)``
export const PopupItem = Styled.Item
