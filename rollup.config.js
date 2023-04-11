import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import multiInput from 'rollup-plugin-multi-input';
// import glob from 'glob';

// const files = glob.sync(['bim-model.js', 'ifc-viewer.js']);

export default {
    // input: files,
    input: 'ifc-viewer.js',
    output: [
        {
            format: 'esm',
            // format: 'cjs',
            file: './dist/bundle.js',
            // dir: 'dist'
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        // multiInput()
    ]
};