const path = require('path');
const babel = require('rollup-plugin-babel');
const serve = require('rollup-plugin-serve');

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
  },
  plugins: [
    babel({
      "presets": [
        "@babel/preset-env"
      ],
    }),
    serve({
      port: 3001,
      // 设置 exmaple的访问目录和dist的访问目录
      contentBase: [resolveFile('example'), resolveFile('dist')]
    })
  ],
}