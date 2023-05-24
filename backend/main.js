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
//     movieName: 'Coctail',
//     country: 'USA',
//     year: 1988,
//     rating: 10,
//     type: 'Film',
//     img: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/40/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%D0%9A%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB%D1%8C.jpg/205px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%D0%9A%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB%D1%8C.jpg",
//     actors: ['Tom Cruise', 'Cameron Diaz'],
//     producer: ['Rodjer  Donaldson']
//     // genre: [Genre.findById('6454eb3d67ba7368633115f6')]
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
        let obj = {

        }
        if (req.query.type) {
            obj.type = req.query.type
        }
        if (req.query.country) {
            obj.country = req.query.country
        }


        if (req.query.genre) {
            obj.genre = req.query.genre
        }

        if (req.query.year) {
            obj.year = { $gte: + req.query.year }
        }

        if (req.query.rating) {
            obj.rating = req.query.rating
        }
        console.log(req.query)

        const movies = await Movie.find(obj);
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
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json(movie)

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