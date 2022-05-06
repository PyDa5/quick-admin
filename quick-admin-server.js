// 启动静态资源服务器
const server = require('pushstate-server')

server.start({
  port: 8001,
  directory: './dist'
})
