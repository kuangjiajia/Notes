const compileTask = require('./compile_task')
const configList = require('./rollup.config.prod')

module.exports = compileTask(configList)

