const express = require("express");
const SignupLoginCOntroller = require("../COntrollers/SignupLoginController");
const router = express.Router();

router.post('/signup',SignupLoginCOntroller.signup);


module.exports = router;