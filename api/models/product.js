const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    price: {type: Number, required: true},
    imageURL: {
        type: String,
        required: true,
        default: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg"
    }
});

module.exports = mongoose.model('Product', productSchema);