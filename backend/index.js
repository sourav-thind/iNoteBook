const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo({ connectTimeoutMS: 30000, useNewUrlParser: true });
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNoteBook Backend listening on https://i-note-book-api.vercel.app:${port}`)
})
