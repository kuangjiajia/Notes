const path = require("path")
const serve = require('rollup-plugin-serve')
const configList = require('./rollup.config')

const resolve = function (filePath) {
  return path.join(__dirname, '..', filePath)
}
const PORT = 3001

configList.forEach((config, index) => {

  config.output.sourcemap = true

  if (index === 0) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: [resolve('')]
        })
      ]
    ]
  }

})

module.exports = configList