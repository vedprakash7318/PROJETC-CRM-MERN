const express = require('express')
const {createPriority,getPriorities} = require('../Controllers/priorityController')
const router= express.Router()

router.post('/add-priority',createPriority)

router.get('/get-all-priority',getPriorities)
module.exports= router
