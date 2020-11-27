require('dotenv').config();
const express = require('express');
require('./crud');
const constantsRouter = require('./routes/constants')

const app = express();

app.use(express.json());
app.use(express.static('./public'));
app.use('/constants',constantsRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, () => {console.log('listening on port '+(process.env.PORT || 3000))});