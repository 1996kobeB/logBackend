import Router from '@koa/router'
import controller from '../../api/Ccontroller'
const router = new Router()


router.get('/getCaptcha',controller.getCaptcha)

module.exports = router