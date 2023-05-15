require('dotenv').config()
const express = require('express');

const cors = require('cors')
const mongoose = require('mongoose')
const app = express();

const { Movie, Genre } = require('./models/Movie.js')
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
}))

// const genre=new Genre({
//     genreName: "Comedy"
// })
// genre.save()


// const movie = new Movie({
//     movieName: 'AMERICAN PSYCHO',
//     year: 2000,
//     rating: 9,
//     type: 'film',
//     img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/American-psycho-poster-0.jpg/202px-American-psycho-poster-0.jpg",
//     actors: ['Cristian Bale','Jared Leto','Reese Witherspoon'],
//     producer: ['Mary Harron'],
//     genre: [Genre.findById('6454eb3d67ba7368633115f6','645521a9b28233ae6f635cbd')]
// })

// movie.save()


app.get('/movies/:id', async (req, res) => {
    try {

        const oneMovie = await Movie.findById(req.params.id).populate('genre')
        res.json(oneMovie)
    } catch (e) {
        res.json({ message: e.message })
    }
})


app.get('/movies', async (req, res) => {
    try {

        const movies = await Movie.find(req.query);
        // const movies = await Movie.find()//.select({ img: 1, movieName: 1, year: 1 })


        res.json(movies)
    } catch (e) {

        res.json({ message: e.message })
    }
})

app.get('/genres', async (req, res) => {
    try {
        const genres = await Genre.find()

        res.json(genres)
    } catch (e) {
        res.json({ message: e.message })
    }
})


app.delete('/movieDelete/:id', async (req, res) => {
    try {
        const result = await Movie.findByIdAndDelete(req.params.id)
        res.status(200).json(result)

    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})

app.post('/movieCreate', async (req, res) => {
    try {
        const body = req.body
        const movie1 = new Movie(req.body)

        await movie1.save()
        res.status(201).json({ message: 'success' })
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})


app.put('/movieUpdate/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body)

        res.status(200).json({ message: 'success' })

    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})




mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {

    console.log('connection to mongodb');
    app.listen(process.env.PORT, (err) => {
        err ? console.log(err) : console.log('Server is listening');;
    })
})