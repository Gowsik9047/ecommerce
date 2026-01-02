const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');

const productSchema = new mangoose.Schema({
    name: String,
    price: String,
    description: String,
    rating: String,
    images: [
        {
            image: String,
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    CreatedAt: Date,
})

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;