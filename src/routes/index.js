const express = require('express');
const routerUser = require('./user.router');
const router = express.Router();
const { verifyJWT } = require('../utils/verifyJWT');

// colocar las rutas aquí

router.use('/users', routerUser)

module.exports = router;