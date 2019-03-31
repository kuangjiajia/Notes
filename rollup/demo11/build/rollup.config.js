const path = require("path")
const babel = require("rollup-plugin-babel")

const resolve = function (filePath) {
  return path.join(__dirname, "..", filePath)
}

const babelOptions = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": false
        }
      }
    ]
  ]
}

let plugins = [
  babel(babelOptions)
]

module.exports = [
  {
    input: resolve("src/index.js"),
    output: {
      file: resolve("dist/index.js"),
      format: "amd"
    },
    external: ['lib/hello', 'lib/world'],
    plugins
  },
  {
    input: resolve('src/lib/hello.js'),
    output: {
      file: resolve('dist/lib/hello.js'),
      format: 'amd',
      amd: {
        id: 'lib/hello'
      },
    },
    plugins,
  },
  {
    input: resolve('src/lib/world.js'),
    output: {
      file: resolve('dist/lib/world.js'),
      format: 'amd',
      amd: {
        id: 'lib/world'
      },
    },
    plugins,
  },
]
