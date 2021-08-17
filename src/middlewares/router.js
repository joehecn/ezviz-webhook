
const Router = require('koa-router')

const router = module.exports = new Router()

// 网站根目录
router.get('/', ctx => {
  ctx.body = {
    code: 0,
    message: 'server is good'
  }
})

router.post('/message', ctx => {
  let body = ctx.request.body
  if (typeof body === 'string') {
    body = JSON.parse(ctx.request.body)
  }
  console.log({ body })
  const messageId = body && body.header && body.header.messageId
  ctx.body = {
    messageId
  }
})
