const  {countryCreate,getAllCountry}  = require('../Controllers/countryController')
const express= require('express')

const router= express.Router();

router.post('/add-country',countryCreate)
router.get('/get-all-country',getAllCountry)


module.exports=router

