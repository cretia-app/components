import { CSSProperties, ReactElement, ReactNode } from 'react'
import { styled } from 'styled-components'

// import errorIcon from '@/Confirmation/error-icon.svg'
// import infoIcon from '@/Confirmation/info-icon.svg'
// import successIcon from '@/Confirmation/success-icon.svg'
// import warningIcon from '@/Confirmation/warning-icon.svg'
import * as Styles from './styles'

interface Props {
	/** content that will be displayed on the pill */
	message?: string | ReactElement | ReactNode
	/** content that will be displayed on the pill */
	children?: string | ReactElement | ReactNode
	/** overrides `CSSProperties` */
	style?: CSSProperties
	/** */
	icon?: ReactNode
}

/** Display an important message with Cretia styled Pill
 *
 * add a related icon trough the `icon` prop or pass a `button`
 *
 * to the children `prop` to emphazise it
 *
 */

export function PillBase(
	props: Props & React.ComponentProps<typeof Styles.Container>,
): ReactElement {
	const { message, children = message, icon, style, ...containerProps } = props

	return (
		<Styles.Container style={style} {...containerProps}>
			{icon}
			<p>{children}</p>
		</Styles.Container>
	)
}

export const Pill = styled(PillBase)``

// Pill.WarningIcon = <Styles.Icon alt="" src={warningIcon} />
// Pill.ErrorIcon = <Styles.Icon alt="" src={errorIcon} />
// Pill.SuccessIcon = <Styles.Icon alt="" src={successIcon} />
// Pill.InfoIcon = <Styles.Icon alt="" src={infoIcon} />
