const koaCombine = require('koa-combine-routers')

const demo = require('./modules/publicRouter')
const getValidEmail = require('./modules/emailRouter')
module.exports = koaCombine(demo, getValidEmail)