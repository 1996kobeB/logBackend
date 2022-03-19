import Router from '@koa/router'
import controller from '../../api/Ccontroller'
const router = new Router()


router.get('/demo',controller.demo)

module.exports = router