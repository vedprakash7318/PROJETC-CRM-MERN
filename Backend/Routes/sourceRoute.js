const express = require('express')
const {createSource} = require('../Controllers/sourceController')
const router= express.Router()

router.post('/add-source',createSource)


module.exports= router
