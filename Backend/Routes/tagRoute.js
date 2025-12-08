const express = require('express')
const {createTag,getAllTag} = require('../Controllers/tagController')
const router= express.Router()

router.post('/add-tag',createTag)
router.get('/get-all-tag/:addedBy',getAllTag)


module.exports= router
