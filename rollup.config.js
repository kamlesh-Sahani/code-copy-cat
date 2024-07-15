import {defineConfig} from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
export default defineConfig({
    input:"src/index.ts",
    output:{
        dir:"dist",
        format:"es",
        name:"code-copy-cat"
    },
    external:["react","react-dom","react-syntax-highlighter"],
    plugins:[ resolve(),
        commonjs(),
        postcss({
          extensions: ['.css'],
        }),typescript({tsconfig:"tsconfig.json"})]
})