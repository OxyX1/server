const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'templates')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'home', 'index.html'));
});

app.get('/authenticated', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'dashboard', 'index.html'));
});

app.get('/authentication', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'authentication', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'about', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
