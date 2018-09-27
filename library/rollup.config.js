import json from 'rollup-plugin-json';
import copy from 'rollup-plugin-copy-glob';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

const peerDependencies = Object.keys(require('./package.json').peerDependencies);

export default {
  external: peerDependencies,
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: 'fixme1library.js',
      dir: 'dist',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    json(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      },
      browser: true,
      extensions: [ '.mjs', '.js', '.jsx', '.json' ]
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    copy([
      { files: 'src/assets/**/*.*', dest: 'dist/assets' },
    ], {verbose: true}),
    babel(),
    minify()
  ]
};
