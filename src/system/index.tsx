import type {
	FlexboxProps,
	GridProps,
	LayoutProps,
	MarginProps,
	PositionProps,
	SpaceProps,
} from 'styled-system'
import { flexbox, grid, layout, margin, position, space } from 'styled-system'

import { styled } from '../utils/styled-components'

type BoxProps = SpaceProps & MarginProps & LayoutProps & PositionProps

const validSpaces = [
	'nano',
	'micro',
	'small',
	'medium',
	'large',
	'x_large',
	'xx_large',
] as const

export const Box = styled.div<BoxProps>`
	${space}
	${margin}
  ${layout}
  ${position}
`

export const Flex = styled(Box)<
	FlexboxProps &
		BoxProps & { gap?: number | string | (typeof validSpaces)[number] }
>`
	display: flex;
	${({ gap }) =>
		gap
			? `gap: ${
					typeof gap === 'number'
						? `${gap}px`
						: validSpaces.includes(gap as any)
						? `var(--space--${gap})`
						: gap
			  };`
			: undefined}
	${flexbox}
`

export const Grid = styled(Box)<
	GridProps & BoxProps & { gap?: number | string; alignItems?: string }
>`
	display: grid;
	${({ gap }) =>
		gap ? `gap: ${typeof gap === 'number' ? `${gap}px` : gap};` : undefined}
	${({ alignItems }) =>
		alignItems ? `align-items: ${alignItems};` : undefined}

  ${grid}
`
