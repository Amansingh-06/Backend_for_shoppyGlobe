// router for authenticatiom
const express = require('express');

const auth = require('../middlewares/auth');
const Register = require('../Auth/Register');
const { login } = require('../Auth/Login');

const router = express.Router();

router.post('/register', Register);
router.post("/login",login)


module.exports = router;