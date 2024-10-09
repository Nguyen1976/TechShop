const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { authMiddleWare } = require('../middleware/authMiddleware');

router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.loginUser);
router.put('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', authMiddleWare ,userController.deleteUser);
router.get('/get-all' , authMiddleWare, userController.getAllUser);
router.get('/get-details/:id', userController.getDetailsUser);

module.exports = router;