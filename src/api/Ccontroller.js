class Controller {
  constructor () {}
  async demo(ctx) {
    ctx.body = {
      msg: 'this from demo'
    }
  }
}
export default new Controller()