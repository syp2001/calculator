require('dotenv').config();
const express = require('express');
require('./crud');

const app = express();

app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, () => {console.log('listening on port '+(process.env.PORT || 3000))});