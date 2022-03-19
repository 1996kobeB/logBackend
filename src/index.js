import koa from 'koa'
import router from './router/index'
import koaCors from '@koa/cors'
import koaBody from 'koa-body'
import compose from 'koa-compose'
import koaHelmet from 'koa-helmet'
import compress from 'koa-compress'
const app = new koa()

// 中间件集成
const middleware = compose([
  koaBody(),
  koaCors(),
  koaHelmet()
])

console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV === 'prod') {
  // 压缩中间件
  app.use(compress())
}
app.use(middleware)
app.use(router())
app.listen(3000)
// es6语法需要npx babel-node src/index.js 启动
// 热更新： npx nodemon --exec babel-node src/index.js 启动es6语法并热更新