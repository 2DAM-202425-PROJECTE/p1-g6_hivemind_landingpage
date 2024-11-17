const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const HivemindModel = require('./models/Hivemind')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://admin:5kh3gbfwdrwc@dasrado.com:27017/hivemind?authSource=admin");

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    HivemindModel.findOne({username: username})
        .then(user => {
            if (user) {
                if(user.password === password) {
                    res.json("Success")
                } else {
                    res.json("Incorrect login credentials")
                }
            } else {
                res.json("No account has been found.")
            }
        })
        .catch(err => res.json(err));
});

app.post('/register', (req, res) => {
    HivemindModel.create(req.body)
        .then(hiveminds => res.json(hiveminds))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})