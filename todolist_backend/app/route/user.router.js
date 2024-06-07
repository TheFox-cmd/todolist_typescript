const express = require('express');
const router = express.Router();
const userController = require('../controller/user.control');

router.get('/users', userController.getAllUsers);
router.post('/auth/login', userController.login);
router.post('/auth/register', userController.register);
router.delete('/auth/delete', userController.deleteAccount);
module.exports = router;
