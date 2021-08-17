
const { writeErr } = require('../util/write.js')

/**
 * 最后一次拦截错误
 */
const lastHandingErrors = async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    console.log('-------------- lastHandingErrors:', e)

    const { message } = e
    
    ctx.status = 503
    ctx.body = { code: 1000001, message: message || 'unknown error' }

    // 记录未知错误日志
    writeErr({
      ctx: {
        message,
        url: ctx.url,
        body: ctx.request.body
      },
      stack: e.stack
    })
  }
}

module.exports = lastHandingErrors
