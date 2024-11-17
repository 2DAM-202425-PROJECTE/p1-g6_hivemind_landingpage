const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const HivemindModel = require('./models/Hivemind')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://dasrado.com:27017/hivemind");

app.post('/register', (req, res) => {
    HivemindModel.create(req.body)
        .then(hiveminds => res.json(hiveminds))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})