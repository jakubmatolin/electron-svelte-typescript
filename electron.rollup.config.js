import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import builtins from 'builtin-modules'

export default [
    {
        input: 'src/electron/app.ts',
        output: {
            file: 'build/app.js',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            typescript({
                tsconfig: 'electron.tsconfig.json',
            }),
            resolve({
                preferBuiltins: true,
            }),
            commonjs(),
            json(),
        ],
        external: ['electron', ...builtins],
    },
]
