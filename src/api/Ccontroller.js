import captcha from 'svg-captcha'
import nodemailer from 'nodemailer'

class Controller {
  constructor () { }
  async getCaptcha (ctx) {
    const newCaptcha = captcha.create({
      ignoreChars: '0o1i',
      noise: Math.floor(Math.random() * 3),
      color: true,
      width: 150,
      height: 40
    })
    ctx.body = {
      code: 200,
      data: newCaptcha
    }
  }
  async getValidEmail (ctx) {
    const { body } = ctx.request
    try {
      validEmail(body.username)
      ctx.body = {
        code: 200,
        msg: '发送成功'
      }
    } catch (e) {
      console.log(e)
    }
  }
}

// 获取验证邮件
async function validEmail (username) {
  // 账户认证
  let transporter = nodemailer.createTransport({
    // host填入域名
    host: "smtp.sina.cn",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      // 此处填入邮箱账号和授权码
      user: 'lsy19961996@sina.cn', // 邮箱
      pass: '7d80585c3dc45136', // 授权码
    },
  });
  let msg = {
    code: 200,
    username: username,
  }
  // 定制发送内容
  let info = await transporter.sendMail({
    from: '"定制发送内容" <lsy19961996@sina.cn>', // sender address
    to: msg.username, // list of receivers
    subject: "Hello ✔", // 标题
    html: `<b>Hello 用户${msg.username}</b>`, // HTML
    text: "Hello world", // 文本
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
export default new Controller()