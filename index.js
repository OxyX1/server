const express = require('express');
const http = require('http');
const path = require('path');


const port = process.env.PORT || 8080;
const app = express();


app.use(express.static(path.join(__dirname, 'templates')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'home', 'index.html'));
});

app.use('/authenticated', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'dashboard', 'index.html'));
});

app.use('/authentication', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'authentication', 'index.html'));
});

app.use('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'about', 'index.html'));
});