const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require('../middleware/authMiddleWare');

router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.loginUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', authMiddleWare ,userController.deleteUser);
router.get('/get-all' , authMiddleWare, userController.getAllUser);
router.get('/get-detail/:id', authUserMiddleWare, userController.getDetailsUser);
router.post('/refresh-token', userController.refreshToken);


module.exports = router;