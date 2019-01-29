// mongoose schema for Order collection

const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true
    },
    quantity: {
        type: Number, default: 1, max: [100, 'Invalid Quantity, Quantity should be below 100']
    },
    userOrderId: {
        type: String, required: true
    },
});

module.exports = mongoose.model('Order', orderSchema);