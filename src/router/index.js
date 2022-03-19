const koaCombine = require('koa-combine-routers')

const demo = require('./modules/demoRouter')

module.exports = koaCombine(demo)