const express = require('express');

const connectDB = require('./config/db');

var cors = require('cors');

const vinyl = require('./routes/api/vinyl');

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/vinyl', vinyl);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));