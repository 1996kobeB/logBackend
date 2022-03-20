import captcha from 'svg-captcha'

class Controller {
  constructor () {}
  async getCaptcha(ctx) {
    const newCaptcha = captcha.create()
    ctx.body = {
      code: 200,
      data: newCaptcha
    }
  }
}
export default new Controller()