import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import _esbuild from 'rollup-plugin-esbuild'
import replace from 'rollup-plugin-replace'

const NODE_ENV = process.env.NODE_ENV || 'development'

const esbuild = _esbuild.default ?? _esbuild

const baseBundle = {
	external: (id) => !/^[./]/.test(id),
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
			'cleave.js/react': 'cleave.js/react.js',
		}),
		esbuild(),
	],
}

export default [
	{
		...baseBundle,
		input: './src/index.ts',
		output: [
			{
				dir: 'dist',
				entryFileNames: '[name].cjs',
				exports: 'auto',
				format: 'cjs',
				preserveModules: true,
				preserveModulesRoot: 'src',
			},
			{
				dir: 'dist',
				entryFileNames: '[name].js',
				exports: 'auto',
				format: 'esm',
				preserveModules: true,
				preserveModulesRoot: 'src',
			},
		],
		plugins: [
			...baseBundle.plugins,
			typescript({
				declaration: true,
				declarationDir: 'dist',
				tsconfig: './tsconfig.build.index.json',
			}),
			copy({
				targets: [{ src: 'src/styles/**', dest: 'styles' }],
			}),
		],
	},
]
