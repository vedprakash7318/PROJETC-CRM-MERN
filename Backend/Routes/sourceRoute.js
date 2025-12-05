const express = require('express')
const {createSource,getSources} = require('../Controllers/sourceController')
const router= express.Router()

router.post('/add-source',createSource)
router.get('/get-all-source',getSources)

module.exports= router
