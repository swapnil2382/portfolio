const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactFormDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// API Route to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({ name, email, message });
  newContact.save()
    .then(() => res.status(200).send('Form submission successful!'))
    .catch((error) => res.status(500).send('Error saving form data.'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
