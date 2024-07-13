const db = require('./config/dbConfig.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/router.js');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors('*'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/frontend/index.html');
//   });

// Serve static files
// app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    return res.send("Welcome to Kenthsroy world!");
})

app.use(router);

// Add error handling middleware for JSON parsing errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        // Handle JSON parsing error
        return res.status(400).json({ error: 'Invalid JSON' });
    }
    res.status(500).json({ message: 'Internal Server Error: ' + err });
    next();
});


// Start the server
app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`);
});
