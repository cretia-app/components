import { type ComponentProps, forwardRef } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

import * as Styles from './styled'

export type Props = {
	name?: string
	children?: ReactNode
	small?: boolean
	solid?: boolean
	submit?: boolean
	inline?: boolean
	center?: boolean
	default?: boolean
	disabled?: boolean
	readOnly?: boolean
	required?: boolean
	destructive?: boolean
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
				type={submit ? 'submit' : 'button'}
				{...otherProps}
			/>
		)
	},
)

export const Button = styled(BaseButton)``
