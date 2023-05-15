// require('dotenv').config()
// const express = require('express');

// const cors = require('cors')
// const mongoose = require('mongoose')
// const app = express();

// const User = require('./models/User.js')
// app.use(express.json())
// app.use(cors())


// app.post('/newmain', async (req, res) => {
//     try {
//         const user1 = new User(req.body)
//         let user = await user1.save()
//         console.log(user)
//         res.json({ status: 'ok' })
//     } catch (e) {
//         res.json({ message: e.message })
//     }

// })

// app.get('/main', async (req, res) => {
//     try {
//         const users = await User.find()
//         console.log(users)

//         res.json(users)
//     } catch (e) {

//         res.status(404).send(e.message)
//     }
// })


// app.put('/update', async (req, res) => {
//     try {
//         const result = await User.updateOne({ name: 'example' }, { name: 'example222' })
//         res.json(result)
//     } catch (e) {
//         res.status(400).json({ message: e.message })
//     }
// })


// app.delete('/delete', async (req, res) => {
//     try {
//         const result2 = await User.deleteOne({ name: 'example' })
//         res.json(result2)
//     } catch (e) {
//         res.status(400).json({ message: e.message })
//     }
// })




// mongoose.connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connection.once('open', () => {

//     console.log('connection to mongodb');
//     app.listen(process.env.PORT, (err) => {
//         err ? console.log(err) : console.log('Server is listening');;
//     })
// })