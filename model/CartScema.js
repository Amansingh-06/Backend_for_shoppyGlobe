const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required:true
    },
    quantity: {
        type: Number,
        required:true
    }
})

const cartData = new mongoose.model("cartData", CartSchema)

module.exports = cartData;