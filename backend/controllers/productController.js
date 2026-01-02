// controller to get products and product by id
// export getProducts and getProductsId function
// use productModel to get data from database
// send json response with success true and message
// handle errors using try catch in getProductsId function
// async await used for database operations

const productModel = require('../models/productsModel')
exports.getProducts = async (req, res, next) => {
    const Producrt = await productModel.find({})
    res.json({
        Producrt,
        success: true,
        message: 'Products fetched successfully'
    })
}
exports.getProductsId = async (req, res, next) => {
    console.log(req.params.id, 'id');

    // Using try catch to handle errors
    // show any error are success show console log
    try {
        const productID = await productModel.findById(req.params.id)
        res.json({
            success: true,
            message: "Products id fetched successfully",
            productID
        })
    }
    catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

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
}