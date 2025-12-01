const express = require('express')
const {createTag} = require('../Controllers/tagController')
const router= express.Router()

router.post('/add-tag',createTag)


module.exports= router
