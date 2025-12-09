const express = require('express')
const {AddLead,getLeads,assignLead} = require('../Controllers/leadController');


const router = express.Router();


router.post('/add-lead',AddLead)
//assign leads
router.put('/assign-lead',assignLead)
router.get('/get-leads/:addedBy',getLeads)
  

module.exports =router