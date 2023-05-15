const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    name: String,

    description: String,

    rating: {
        type: Number,
        min: 1,
        max: 10
    }
})



module.exports = mongoose.model('User', userShema)