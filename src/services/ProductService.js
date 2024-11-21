const Product = require('../models/ProductModel');


const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, type, price, countInStock, rating, description } = newProduct;
        try {
            const checkProduct = await Product.findOne({ name });
            if(checkProduct !== null) {
                return resolve({
                    status: 'OK',
                    message: 'Tên sản phẩm đã tồn tại',
                });
            }
            const newProduct = await Product.create({
                name,
                image,
                type,
                price,
                countInStock,
                rating,
                description
            })
            if(newProduct) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: newProduct
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({_id: id});

            if(checkProduct === null) {
                return resolve({
                    status: 'OK',
                    message: 'Product không tồn tại',
                });
            }

            await Product.findByIdAndDelete(id);

            resolve({
                status: 'OK',
                message: 'delete product success',
            })
        } catch (e) {
            reject(e);
        }
    })
}

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({_id: id});

            if(checkProduct === null) {
                return resolve({
                    status: 'OK',
                    message: 'Sản phẩm không tồn tại',
                });
            }

            const updateProduct = await Product.findByIdAndUpdate(id, data, { new: true });

            resolve({
                status: 'OK',
                message: 'Success',
                data: updateProduct
            })
        } catch (e) {
            reject(e);
        }
    })
}

const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findOne({_id: id});

            if(product === null) {
                return resolve({
                    status: 'OK',
                    message: 'Product không tồn tại',
                });
            }

            resolve({
                status: 'OK',
                message: 'getDetailProduct success',
                data: product
            })
        } catch (e) {
            reject(e);
        }
    })
}

const getAllProducts = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.countDocuments();
            let query = {};

            if (filter) {
                const label = filter[0];
                query[label] = { '$regex': filter[1], '$options': 'i' }; 
            }

            let productsQuery = Product.find(query)
                .limit(limit)
                .skip(page * limit);

            if (sort) {
                const objectSort = {};
                objectSort[sort[1]] = sort[0]; 
                productsQuery = productsQuery.sort(objectSort);
            }

            const products = await productsQuery;
            resolve({
                status: 'OK',
                message: filter ? 'get all product filter success' : (sort ? 'get all product sort success' : 'get all product success'),
                data: products,
                total: totalProduct,
                pageCurrent: page + 1,
                totalPages: Math.ceil(totalProduct / limit)
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProducts
}