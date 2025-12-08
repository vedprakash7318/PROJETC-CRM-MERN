const express = require('express')
const {createSource,getSources} = require('../Controllers/sourceController')
const router= express.Router()

router.post('/add-source',createSource)
router.get('/get-all-source/:addedBy',getSources)

module.exports= router
