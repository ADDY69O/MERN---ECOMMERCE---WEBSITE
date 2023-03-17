const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter the product description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
        max: [99999999, "Price cannot exceed more than 8 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Enter the category of product"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter the stock of product"],
        max: [9999, "Stock cannot exceed more than 10000"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);
