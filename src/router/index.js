const koaCombine = require('koa-combine-routers')

const demo = require('./modules/publicRouter')

module.exports = koaCombine(demo)