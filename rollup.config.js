import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

import packageJSON from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: packageJSON.main, format: 'cjs', sourceMap: true },
      { file: packageJSON.module, format: 'esm', sourceMap: true },
    ],
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
]
