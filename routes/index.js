const router = require('express').Router();

const apiRoutes = require('./api/api-routes')
const homeRoutes = require('./view/home-routes')

router.use('/api', apiRoutes)
router.use('/', homeRoutes)

module.exports = router