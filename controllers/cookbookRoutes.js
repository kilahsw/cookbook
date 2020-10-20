const express = require('express')
const router = express.Router()
//import db connection
const mongoose = require('../db/connection')
//create db connection
const db = mongoose.connection
//import cookbook model
const Cookbook = require('../models/Cookbook')
//import seed data
const seedData = require('../db/seed')

// Write the route to list all cookbooks
router.get(`/`, async (req, res) => {
    const cookbook = await Cookbook.find({});
    res.json({ status: 200, data: cookbook });
});

// Write the route to get cookbook by title
router.get('/:title', async (req, res) => {
    const cookbook = await Cookbook.find(req.params.title);
    res.json({ status: 200, data: cookbook });
});

// Write the route to get cookbook by year published
router.get("/year/:yearPublished", async (req, res) => {
    const cookbook = await Cookbook.find(req.params.yearPublished);
    res.json({ status: 200, data: cookbook });
});
// Write the route to create a cookbook
router.post(`/`, async (req, res) => {
    const cookbook = await Cookbook.create(req.body);
    res.json({ status: 200, data: cookbook });
});

// Write the route to update a cookbook
router.put('/:title', async (req, res) => {
    const cookbook = await Cookbook.findByIdAndUpdate(req.params.id);
    res.json({ status: 200, data: cookbook });
});

// Write the route to delete the cookbook by title
router.delete('/:title', async (req, res) => {
    const cookbook = await Cookbook.findByIdAndDelete(req.params.id);
    res.json({ status: 200, data: cookbook });
});

module.exports = router;