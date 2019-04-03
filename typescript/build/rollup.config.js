const babel = require("rollup-plugin-babel")
const buble = require('rollup-plugin-buble')
const typescript = require("rollup-plugin-typescript")

const {
  resolve,
  babelOptions
} = require("./utils")


module.exports = [{
  input: resolve("src/index.ts"),
  output: {
    file: resolve('dist/index.js'),
    format: 'iife',
    name: 'helloworld',
  },
  plugins: [
    typescript(),
    babel(babelOptions),
    buble(),
  ],
}]