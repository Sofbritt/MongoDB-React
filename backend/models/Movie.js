const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    genreName: String,

})

const userSchema = new mongoose.Schema({
    movieName: String,
    country: String,
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
    year: Number,
    rating: Number,
    type: String,
    img: String,
    actors: [String],
    producer: [String]


})

module.exports = {
    Movie: mongoose.model('Movie', userSchema),
    Genre: mongoose.model('Genre', genreSchema),
} 