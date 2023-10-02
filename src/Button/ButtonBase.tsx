import type { ReactElement } from 'react'

import * as Styles from './styled'

interface Props {
	/**what will be rendered inside the button. It represents the content or label of the button */
	children?: any
	/** Click callback, with event object passed as argument */
	onClick?: () => void
	/** When set to `true`, this prop makes the button smaller in size. */
	small?: boolean
	/** gives the button a solid background when set to `true` */
	solid?: boolean
	/** gives the submit attribute to the button element */
	submit?: boolean
	/**to display the button inline with other elements */
	inline?: boolean
	/** center alignment of the button */
	center?: boolean
	/** set the button as the default action */
	default?: boolean
	/** disables the button when set to `true` */
	disabled?: boolean
	/** control whether the button is in read-only mode */
	readOnly?: boolean
	/** indicates that the button is required for a certain action */
	required?: boolean
	/** when set to `true` styles of the button change to red to indicate a irreversible action */
	destructive?: boolean
	/** when set to `true` the button background disspaears */
	$transparent?: boolean
	as?: string | ReactElement
	name?: string
	/** */
	title?: string
}

export { baseButtonStyles } from './styled'

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
		readOnly = false,
		required = false,
		children = title,
		disabled = false,
		destructive = false,
		solid = Boolean(submit),
		small = Boolean(inline),
		$transparent = Boolean(inline),
	} = props

	return (
		<Styles.Container
			name={name}
			small={small}
			solid={solid}
			$center={center}
			disabled={disabled}
			readOnly={readOnly}
			required={required}
			$destructive={destructive}
			$transparent={$transparent}
			type={submit ? 'submit' : 'button'}
			{...(submit ? { as: 'input', value: children } : { children })}
		/>
	)
}

export { ButtonBase }
