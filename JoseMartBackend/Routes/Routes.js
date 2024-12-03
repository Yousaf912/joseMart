const express = require("express");
const SignupLoginCOntroller = require("../COntrollers/SignupLoginController");
const router = express.Router();

router.post('/signup',SignupLoginCOntroller.signup);
router.post('/login',SignupLoginCOntroller.login);
router.get('/check',SignupLoginCOntroller.autenticate ,SignupLoginCOntroller.home);


module.exports = router;