const express = require('express');
const app = express();

const fooRoute = require('./foo');
const barRoute = require('./bar');

app.use('/foo', fooRoute);
app.use('/bar', barRoute);

app.listen(5555);