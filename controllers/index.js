var express = require('express')
  , router = express.Router()

router.use('/login', require('./login/index'))

module.exports = router