import { type ComponentProps, forwardRef } from 'react'
import type { ReactNode } from 'react'

import { styled } from '../utils/styled-components'

import * as Styles from './styled'

export type Props = {
	name?: string
	children?: ReactNode
	small?: boolean
	/** @deprecated use '$variant' */
	solid?: boolean
	/** @deprecated use 'type' */
	submit?: boolean
	/** @deprecated use '$variant' */
	inline?: boolean
	center?: boolean
	default?: boolean
	disabled?: boolean
	/** @deprecated use '$danger' */
	destructive?: boolean
	/** @deprecated use '$variant' */
	$transparent?: boolean
} & ComponentProps<typeof Styles.Container>

export { ButtonStyle as baseButtonStyles } from './styled'

export const BaseButton = forwardRef<HTMLButtonElement, Props>(
	function ButtonWithRef(props, ref) {
		const {
			submit,
			inline,
			center,
			destructive,
			solid = submit,
			small = inline,
			$transparent = inline,
			type = submit ? 'submit' : 'button',
			...otherProps
		} = props

		return (
			<Styles.Container
				ref={ref}
				small={small}
				solid={solid}
				$center={center}
				$destructive={destructive}
				$transparent={$transparent}
				type={type}
				{...otherProps}
			/>
		)
	},
)

export const Button = styled(BaseButton)``
