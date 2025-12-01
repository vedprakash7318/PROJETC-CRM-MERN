const express = require('express')
const {createPriority} = require('../Controllers/priorityController')
const router= express.Router()

router.post('/add-priority',createPriority)


module.exports= router
