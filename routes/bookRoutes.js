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

router.get('/getbook/:id', async (req, res) => {
   try {
      const book = await bookSchema.findById(req.params.id);
      if (!book) {
         return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
   } catch (err) {
      res.status(500).json({ error: err });
   }
}
);

router.delete('/deletbook/:id', async (req, res) => {
   try {
      const findbook = await bookSchema.findById(req.params.id);
      if (!findbook) {
         return res.status(404).json({ error: 'Book not found' });
      }
      const book = await bookSchema.deleteOne({ _id: req.params.id });
      res.json("Book delete ✅");
   } catch (err) {
      res.status(500).json({ error: err })
   }

});

router.patch('/updatebook/:id', async (req, res) => {
   try {
      const findBook = await bookSchema.findById(req.params.id);
      if (!findBook) {
         return res.status(404).json({ error: 'Book not found' });
      }

      const updatedBook = await bookSchema.updateOne(
         { _id: req.params.id },     // Filter
         { $set: req.body }          // Update
      );

      res.json({ message: 'Book updated successfully' });

   } catch (err) {
      res.status(500).json({ Error: err });
   }
})

module.exports = router;