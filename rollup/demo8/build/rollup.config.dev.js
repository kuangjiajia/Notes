const config = require("./rollup.config")
const serve = require("rollup-plugin-serve")
const path = require('path');

const resolve = function (filePath) {
  return path.join(__dirname, "..", filePath)
}

const PORT = 7788


config.output.sourcemap = true

config.plugins = [
  ...config.plugins,
  serve({
    port: PORT,
    contentBase: [resolve('example'), resolve('dist')]
  })
]

module.exports = config