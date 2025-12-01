const express = require('express')
const {createFollowUpStatus} = require('../Controllers/followupStatusController')

const router = express.Router()

router.post('/add-status',createFollowUpStatus)

module.exports=router