const express = require('express')
const router = express.Router()
const { home, getLaraInfo } = require('../controllers/index')

router.get('/', home)
router.get('/info', getLaraInfo)

module.exports = router;