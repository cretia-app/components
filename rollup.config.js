import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json')

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			nodeResolve({
				preferBuiltins: false,
			}),
			commonjs(),
			typescript(),
			terser(),
		],
		external: ['react', 'react-dom', 'styled-components'],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/types.d.ts', format: 'esm' }],
		plugins: [dts.default()],
	},
]
