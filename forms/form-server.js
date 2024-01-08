const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// GET endpoint for handling login
app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    // Here, you can perform authentication logic
    // For simplicity, let's just send back a response with the received data
    res.json({ username, password });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
