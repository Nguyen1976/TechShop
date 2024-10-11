const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { authMiddleWare } = require('../middleware/authMiddleWare');

router.post('/create', ProductController.createProduct);
router.put('/update/:id', authMiddleWare, ProductController.updateProduct);
router.get('/get-detail/:id', ProductController.getDetailProduct);
router.delete('/delete/:id', ProductController.deleteProduct);
router.get('/get-all' , authMiddleWare, ProductController.getAllProducts);

module.exports = router;