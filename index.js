const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Server is up' }); // Usando 'res' em vez de 'express.response'
})

app.listen(3333)
