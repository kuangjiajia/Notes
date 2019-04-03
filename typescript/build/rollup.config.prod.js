process.env.NODE_ENV = 'production'
const { uglify } = require('rollup-plugin-uglify');

const configList = require("./rollup.config")

configList.forEach(config => {
  config.output.sourcemap = false
  config.plugins = [
    ...config.plugins,
    ...[
      uglify()
    ]
  ]
})


module.exports = configList