
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const {
  lastHandingErrors,
  router
} = require('./middlewares/index.js')

const app = new Koa()

app
  .use(lastHandingErrors)
  .use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }))
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = app