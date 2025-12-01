const express = require('express')
const {createServices} = require('../Controllers/servicesController')
const router= express.Router()

router.post('/add-service',createServices)


module.exports= router
