const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    products: [
        {
            name: { type: String, required: true },
            description: { type: Strying, require: false },
            price: { type: Number, required: true},
            previewImageURL: { type: String, required: false },
            retailer: { type: String, required: true },
            retailerURL: { type: String, required: true },
            category: [
                {
                    categoryId: { type: String, required: true }
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Product', productSchema)