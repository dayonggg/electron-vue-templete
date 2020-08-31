import path from 'path'
import express from 'express'
const httpServer = express()

export default {
  createServer (options: any) {
    httpServer.use(express.static(path.join(options.root)))
    const server = httpServer.listen(options.port, () => {
      const port = server.address().port
      // console.log(server)
      // 设置跨域访问
      httpServer.all('*', (req: any, res: any, next: any) => {
        // 设置允许跨域的域名，*代表允许任意域名跨域
        res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
        // 允许的header类型
        res.header(
          'Access-Control-Allow-Headers',
          'Content-Type, Authorization, X-Requested-With'
        )
        // 跨域允许的请求方式
        // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        // 可以带cookies
        // res.header("Access-Control-Allow-Credentials", true);
        if (req.method === 'OPTIONS') {
          res.sendStatus(200)
        } else {
          next()
        }
      })
      console.log('资源服务器开启', 'localhost', port)
    })
  }
}
