const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('Server is running on localhost: 8080');
})

app.get('/', (req, res) => {
    res.send('Hello');
})