const express = require('express');
const path = require('path');
var xmlparser = require('express-xml-bodyparser');

const app = express();
app.use(express.static('files'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));