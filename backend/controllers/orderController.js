// controller to post order
// export postOrder function
// send json response with success true and message "Order placed successfully"
const orderModel = require('../models/orderModel')

exports.postOrder = async (req, res, next) => {
    // check req.body response
    // get cart items from request body
    // console.log(req.body);
    const cart_Items = req.body
    // calculate total amount
    // previous value initial 0 but one ime current value vantha priviousvalue la change agirum
    //arrow function first parameter PreviousValue 
    // arrow function second parameter currValue

    const Amount = Number(cart_Items.reduce((PreviousValue, currValue) => {
        return PreviousValue + currValue.product.price * currValue.quantity
    }, 0)).toFixed(2);
    // console.log(amount, 'amount');
        
    // Send data to orderModel
   const order = await orderModel.create({
        cartItems: cart_Items,
        amount: Amount,
        status: "pending",
    })

    res.json({
        success: true,
        message: "Order placed successfully",
        order
    })
}