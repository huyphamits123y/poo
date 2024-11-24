const express = require('express')
const router = express.Router();
const userController = require("../controller/UserController");
router.get('/getall', userController.getAllUsers);
module.exports = router