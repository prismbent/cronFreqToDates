const qs = require('qs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const freqToUniqDates = require('./routes/freqToUniqDates');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/1/freqToDates', freqToUniqDates.freqToUniqDates);

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Server started! At http://localhost:' + port);
