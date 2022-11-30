const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => res.send('Hello, NodeJS'))
app.listen(port, () => {
    console.log('server is run')
})