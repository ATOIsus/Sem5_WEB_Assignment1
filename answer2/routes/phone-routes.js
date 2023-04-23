const express = require('express')
const router = express.Router()

//Importing model.
const PhoneBook = require('../models/phone-book-model')

router.route('/')

    .get((req, res) => {
        PhoneBook.find() 
                    .then(phoneBookInfo => res.json(phoneBookInfo))
                    .catch(err => console.log(err))
    })

    .post((req, res) => {
        var post = new PhoneBook({
          id: req.body.id,
          name: req.body.name,
          number: req.body.number,
        })
        post.save() 
            .then(res.json(201, post)            )
            .catch (err => console.log(err))
      })

    .put((req, res) => {
        res.status(405).json({error: "PUT request is not allowed."})
    })

    .delete((req, res) => {
        res.status(405).json({error: "DELETE request is not allowed."})
    })


module.exports = router