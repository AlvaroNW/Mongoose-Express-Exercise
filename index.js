const express = require('express')
const mongoose = require('mongoose')
const studentRoutes = require('./routes/studentRoutes')
const bodyParser = require('body-parser');

const port = 3000
const app = express()
app.use(bodyParser.json())

//database connection
const mongoConnection = require('./db/mongooseConnect');
mongoConnection();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.use(studentRoutes)



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})


