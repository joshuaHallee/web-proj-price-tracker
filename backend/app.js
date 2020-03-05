require('dotenv').config({path: __dirname + "/.env"})
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT_LOCAL

//import routes
const productRoute = require('./routes/product')
const categoryRoute = require('./routes/category')
const search = require('./routes/search')
const taskRoute = require('./routes/task')

//middleware
app.use(bodyParser.json())
app.use('/api/product', productRoute)
app.use('/api/category', categoryRoute)
app.use('/api/search', search)
app.use('/api/task', taskRoute)

// local mongoDB connection
mongoose.connect(process.env.DB_CONNECTION_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to ${process.env.DB_CONNECTION_LOCAL}`);
})

// mongoDB listening for error while connected
mongoose.connection.on('error', err => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send(`${res.statusCode}`)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
