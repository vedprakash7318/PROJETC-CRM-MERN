const express = require('express')
const {AddLead,getLeads} = require('../Controllers/leadController');


const router = express.Router();


router.post('/add-lead',AddLead)
router.get('/get-leads/:addedBy',getLeads)


module.exports =router