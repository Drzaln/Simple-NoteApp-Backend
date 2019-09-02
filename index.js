require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require ('body-parser')

const categoryRoute = require('./routes/category')
const noteRoute     = require('./routes/note')

app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(bodyParser.json())
app.use(express.static('uploads'))

app.use(`/note`, noteRoute)
app.use(`/category`, categoryRoute)

app.listen(port)
console.log(`Dimulai di port ${port}`)