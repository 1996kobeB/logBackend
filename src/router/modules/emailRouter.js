import Router from '@koa/router'
import controller from '../../api/Ccontroller'

const router = new Router()

router.post('/getValidEmail', controller.getValidEmail)

module.exports = router