const gzippo = require('gzippo');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip('' + __dirname + '/dist'));
app.listen(process.env.PORT || 5000);
