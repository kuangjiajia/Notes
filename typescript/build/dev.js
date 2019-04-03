const path = require('path')
const chokidar = require('chokidar')
const Koa = require('koa')
const KoaStatic = require('koa-static')
const compileTask = require('./compile_task')
const configList = require('./rollup.config.dev')
const { exec } = require('child_process');
const app = new Koa()
const projectPath = path.join(__dirname, '..')
const srcPath = path.join(projectPath, 'src')

function watchSrc() {
  chokidar.watch(srcPath, {
    ignored: /(^|[\/\\])\../
  }).on('all', (event, path) => {
    if (event === 'change') {
      compileTask(configList).then(_ => {
        exec("./ts.sh")
      })
    }
  })
}

app.use(KoaStatic(projectPath))
app.listen(3001, function () {
  compileTask(configList)
  watchSrc()
})