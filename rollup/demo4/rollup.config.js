import resolve from 'rollup-plugin-node-resolve';

export default {
  input: "main.js",
  output: {
    file: "bundle.js",
    format: "cjs"
  },
  plugins: [
    // resolve()
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    })
  ],
  external: ['lodash']
}







