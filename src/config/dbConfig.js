

const mongoose = require('mongoose')

const dbConfig = "mongodb+srv://victorsalome41:Iphone5s.@cluster0.vg5aljz.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connect(dbConfig
)

module.exports = connection