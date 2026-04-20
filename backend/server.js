require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Contact = require('./models/Contact')

const app = express()
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "https://kodandamedia.com/"],
  })
);
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err))

// Contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    if (!name || !email || !message) return res.status(400).json({ error: 'name, email and message are required' })
    const doc = await Contact.create({ name, email, subject, message })
    res.status(201).json({ success: true, id: doc._id })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
