const express = require('express')
const router = express.Router()
const codeFiles = require('./fs')

router.post('/release', codeFiles.releaseComponent)

module.exports = router
