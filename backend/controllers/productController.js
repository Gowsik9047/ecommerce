// controller to get products and product by id
// export getProducts and getProductsId function
// use productModel to get data from database
// send json response with success true and message
// handle errors using try catch in getProductsId function
// async await used for database operations

const productModel = require('../models/productsModel');

//  GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});

        res.status(200).json({
            success: true,
            products,
            message: 'Products fetched successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ✅ GET PRODUCT BY ID
exports.getProductsId = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product,
            message: "Product fetched successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//  GET PRODUCTS BY CATEGORY
exports.getProductsCategory = async (req, res) => {
    try {
        const category = req.params.category;

        const products = await productModel.find({ category });
        //  IMPORTANT CHECK
        // if (products.length === 0) {
        //     return res.status(404).json({
        //         success: false,
        //         message: `No products found for category: ${category}`
        //     });
        // }

        res.status(200).json({
            success: true,
            products,
            message: `Products in category ${category} fetched successfully`
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// this is normal way to handle errors without try catch
// catch means show any error are success show console log

// ||
// ||
// \/

// res.json({
//     success: true,
//     message: "Products id fetched successfully",
//     productID
// })
