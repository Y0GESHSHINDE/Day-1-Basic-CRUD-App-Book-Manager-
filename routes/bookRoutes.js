const express = require("express");
const router = express.Router();
const bookSchema = require('../models/book');
const mongoose = require("mongoose");


router.post('/addbook', async (req, res) => {
   try {
      const newBook = new bookSchema(req.body);
      const savedBook = await newBook.save();
      res.status(200).json(savedBook);
   } catch (err) {
      res.status(400).json({ error: err.message });
   }
});

router.get('/getbooks', async (req, res) => {
   try {
     const books = await bookSchema.find();
     res.json(books);
   } catch (err) {
     res.status(500).json({ error: 'Error fetching books' });
   }
 });


module.exports = router;