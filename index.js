const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return express.response.json({ message: 'Server is up' });
})

app.listen(3333)