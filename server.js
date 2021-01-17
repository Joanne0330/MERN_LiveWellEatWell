const express = require('express');
const connectDB = require('./config/db');

const app = express();


//Connect Database
connectDB();

// Initiate middleware to allow body parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!!!'));

// Definte Routes
app.use('/api/recipes', require('./routes/api/recipes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
