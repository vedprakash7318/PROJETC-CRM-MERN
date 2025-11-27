const express = require('express');
const { createUser,userLogin ,getProfile} = require('../Controllers/userController');
const auth = require('../Middleware/auth');

const router = express.Router();

router.post('/create',createUser)
router.post('/login',userLogin)
router.get('/profile',auth,getProfile)


module.exports = router