const express = require('express')
const router = express.Router()
//import db connection
const mongoose = require('../db/connection')
//create db connection
const db = mongoose.connection
//import author model
const Author = require('../models/Author')
//import seed data
const seedData = require('../db/seed')

// Write the route to list all authors
router.get(`/`, async (req, res) => {
    const allAuthors = await Author.find({});
    res.json({
        status: 200,
        data: allAuthors,
    });
});
// Write the route to get authors by firstname
router.get('/:firstName', async (req, res) => {
    const author = await Author.find({ firstName: req.params.firstName })
    res.json({
        status: 200, data: author
    })
})

// Write the route to create an author:
router.post(`/`, async (req, res) => {
    const author = await Author.create(req.body);
    res.json({ status: 200, data: author });
});

// Write the route to update an author
router.put(`/:id`, async (req, res) => {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json({ status: 200, data: author });
});



module.exports = router;
