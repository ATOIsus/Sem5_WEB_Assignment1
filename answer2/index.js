
const express = require('express')
const mongoose = require("mongoose")
const books_routes = require('./routes/phone-routes')



mongoose.connect('mongodb://127.0.0.1:27017/demo')   // mongodb://localhost:27017/demo will not work.
        .then(() => console.log("Connected to mongodb."))
        .catch((err) => console.log(err))


const app = express()


app.use('/phonebook', books_routes)



app.listen(3000, () =>{
    console.log(`Server is running in 3000`)   
 })
