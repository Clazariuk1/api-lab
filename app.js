const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const app = express()

// app.set('view engine', 'jsx')
// app.engine('jsx', jsxEngine())


app.get('/', (req, res) => {
    res.send('are we alive?')
})
app.use(express.json())
app.use(morgan('combined'))
app.use('/users', userRoutes)
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'


module.exports = app
