const mongoose = require('mongoose')

const HivemindSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
})

const HivemindModel = mongoose.model("hiveminds", HivemindSchema)
module.exports = HivemindModel