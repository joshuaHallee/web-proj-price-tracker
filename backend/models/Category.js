const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categories: [
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            creationDate: { type: Date, default: Date.now },
            products: [
                {
                    productId: { type: String}
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Category', categorySchema)