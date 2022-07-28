import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    plugins: [
        del({ targets: ['./dist'] }),
        typescript({ 
          tsconfig: './tsconfig.json',
          declarationDir: '@types'
        }),
    ],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
    ],
    external: [/@nestjs\/.*/, /node:.*/, 'uuid', 'lodash'],
  },
  // bundle all type definitions into one file
  {
    input: 'dist/@types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      del({
        targets: ['./dist/@types'],
        hook: 'buildEnd',
      }),
    ],
  },
];
