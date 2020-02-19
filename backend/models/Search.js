const mongoose = require('mongoose')

const searchSchema = new mongoose.Schema({
    searches: [
        {
            searchQuery: { type: String, required: true },
            creationDate: { type: Date, default: Date.now },
            lastSearched: { type: Date, default: Date.now }
        }
    ]
})

module.exports = mongoose.model('Search', searchSchema)