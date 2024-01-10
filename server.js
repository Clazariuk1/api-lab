require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('I feel pretty, oh so pretty. Mongo makes me pretty.')
})

app.listen(PORT, () => {
    console.log(`The port! It breathes at port ${PORT}`)
})
