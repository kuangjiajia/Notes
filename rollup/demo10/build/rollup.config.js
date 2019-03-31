const path = require("path")
const babel = require("rollup-plugin-babel")

const resolve = function (filePath) {
  return path.join(__dirname, "..", filePath)
}



module.exports = [
  {
    input: resolve('src/index.js'),
    output: {
      file: resolve('dist/index.js'),
      format: 'amd',
    },
    plugins: [
      babel({
        presets: [
          [
            "@babel/preset-env",
            {
              "targets": {
                "esmodules": true
              }
            }
          ]
        ]
      }),
    ],
  },
  {
    input: resolve('src/lib/index.js'),
    output: {
      file: resolve('dist/lib.js'),
      format: 'cjs',
    },
    plugins: [
      babel({
        presets: [
          "@babel/preset-env"
        ]
      }),
    ],
  }
]