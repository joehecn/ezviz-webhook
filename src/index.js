
const app = require('./app.js')
const { SEV_PORT } = require('./config/index.js')

const start = async () => {
  app.listen(SEV_PORT, console.log('---- server is run on port', SEV_PORT))
  return true
}
start().then(res => console.log('---- server init', res))
