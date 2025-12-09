const express = require('express');
const { createUser,userLogin ,getProfile,getEmployee} = require('../Controllers/userController');
const auth = require('../Middleware/auth');

const router = express.Router();

router.post('/create',createUser)
router.post('/login',userLogin)



// get all employees
router.get('/get-employee/:addedby',getEmployee)



router.get('/profile',auth,getProfile)


module.exports = router