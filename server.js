const express = require("express");
const mongoose = require("mongoose")
const bookRoutes = require('./routes/bookRoutes')
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(express.json());
app.use('/', bookRoutes)



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})
