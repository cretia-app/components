import type { ComponentProps } from 'react'

import type { ButtonParameters } from './styled'
import * as Styles from './styled'

type Props = {
	/** When set to `true`, this prop makes the button smaller in size. */
	small?: boolean
	/** gives the submit attribute to the button element */
	submit?: boolean
	/**to display the button inline with other elements */
	inline?: boolean
	/** center alignment of the button */
	center?: boolean
	/** set the button as the default action */
	default?: boolean
	/** when set to `true` styles of the button change to red to indicate a irreversible action */
	destructive?: boolean
	/** when set to `true` the button background disspaears */
	$transparent?: boolean
	/** @deprecated */
	title?: string
} & ButtonParameters &
	ComponentProps<'button'>

export { ButtonStyle as baseButtonStyles } from './styled'

/**Cretia actions buttons
 *
 * Renders a default `button` that can be styled with the `destructive`,
 *
 * `solid` and `$transparent` props.
 */

function ButtonBase(props: Props) {
	const {
		name,
		title,
		submit = false,
		inline = false,
		center = false,
		children = title,
		disabled = false,
		destructive = false,
		solid = Boolean(submit),
		small = Boolean(inline),
		$transparent = Boolean(inline),

		...otherProps
	} = props

	return (
		<Styles.Container
			name={name}
			small={small}
			solid={solid}
			$center={center}
			disabled={disabled}
			$destructive={destructive}
			$transparent={$transparent}
			type={submit ? 'submit' : 'button'}
			{...otherProps}
		>
			{children}
		</Styles.Container>
	)
}

export { ButtonBase }
