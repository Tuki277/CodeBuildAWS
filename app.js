const express = require('express');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello Tuki from AWS`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);