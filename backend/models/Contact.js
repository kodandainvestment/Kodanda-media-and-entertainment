const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  subject:    { type: String, default: 'General Inquiry' },
  message: { type: String, required: true },
}, { timestamps: true })

module.exports = model('Contact', contactSchema)
