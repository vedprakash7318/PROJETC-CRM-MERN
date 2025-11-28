const  {cityCreate,getAllCity}  = require('../Controllers/cityController')
const express= require('express')

const router= express.Router();

router.post('/add-city',cityCreate)
router.get('/get-all-city',getAllCity)


module.exports=router

