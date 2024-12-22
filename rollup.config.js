import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationDir: null
      }),
      terser()
    ],
    output: [
      {
        file: 'dist/index.mjs',
        format: 'esm'
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        exports: 'default'
      }
    ]
  },
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    }
  }
]
