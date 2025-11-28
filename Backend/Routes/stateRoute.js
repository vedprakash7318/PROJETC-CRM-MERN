const  {stateCreate,getAllState}  = require('../Controllers/stateController')
const express= require('express')

const router= express.Router();

router.post('/add-state',stateCreate)
router.get('/get-all-state',getAllState)


module.exports=router

