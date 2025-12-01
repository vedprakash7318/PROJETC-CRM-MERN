const express = require('express')
const {AddLead} = require('../Controllers/leadController');


const router = express.Router();


router.post('/add-lead',AddLead)


module.exports =router