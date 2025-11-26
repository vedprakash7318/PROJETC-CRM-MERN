const express = require('express');
const { createUser,userLogin } = require('../Controllers/userController');

const router = express.Router();

router.post('/create',createUser)
router.post('/login',userLogin)


module.exports = router