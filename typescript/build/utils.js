const path = require("path")

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

module.exports = {
  resolve,
  babelOptions
}

