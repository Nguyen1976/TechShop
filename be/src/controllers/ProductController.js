const ProductService = require('../services/ProductService');

const createProduct = async (req, res) => {
    const { name, image, type, price, countInStock, rating, description } = req.body;
    if (!name ||!image ||!type ||!price ||!countInStock ||!rating ||!description) {
        return res.status(400).json({
            message: 'Vui lòng điền đầy đủ thông tin'
        });
    }
    try {
        const respon  = await ProductService.createProduct(req.body); //đợi service xử lý logic
        return res.status(200).json(respon);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const data = req.body;

        if(!productId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Lỗi không có productId'
            })
        }

        const respon  = await ProductService.updateProduct(productId, data);
        return res.status(200).json(respon);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

const getDetailProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if(!productId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Lỗi không có productId'
            })
        }

        const respon  = await ProductService.getDetailProduct(productId);
        return res.status(200).json(respon);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if(!productId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Lỗi không có productId'
            })
        }

        const respon  = await ProductService.deleteProduct(productId);
        return res.status(200).json(respon);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

//product/get-all?page=0&limit=5&sort=desc&sort=name
const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 0;
        const limit = parseInt(req.query.limit) || 2; 
        const sort = req.query.sort;
        const filter = req.query.filter;

        const respoon  = await ProductService.getAllProducts(limit, page, sort, filter);

        return res.status(200).json(respoon);
        
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}


module.exports = {
    createProduct,
    updateProduct,
    getDetailProduct,
    deleteProduct,
    getAllProducts
}