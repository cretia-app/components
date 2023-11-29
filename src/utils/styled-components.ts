import styledDefault, { css } from 'styled-components'

const styled: typeof styledDefault =
	(styledDefault as any).default || styledDefault

export { styled, css }
