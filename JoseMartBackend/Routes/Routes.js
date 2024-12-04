const express = require("express");
const SignupLoginCOntroller = require("../COntrollers/SignupLoginController");
const ProductsController = require("../COntrollers/ProductsControler");
const router = express.Router();

router.post('/signup',SignupLoginCOntroller.signup);
router.post('/login',SignupLoginCOntroller.login);
router.get('/check',SignupLoginCOntroller.autenticate ,SignupLoginCOntroller.home);
router.get('/getcatagory',ProductsController.getCategory)


module.exports = router;