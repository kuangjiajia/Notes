const configList = require("./rollup.config")
const { uglify } = require('rollup-plugin-uglify');


configList.forEach(config => {
  config.output.sourcemap = false

  config.plugins = [
    ...config.plugins,
    uglify()
  ]
})

module.exports = configList