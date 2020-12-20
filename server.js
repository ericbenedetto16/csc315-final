require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors({ origin: process.env.ALLOWED_HOSTS }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Healthcheck
app.get('/ping', (req, res, next) => res.send('ok'));

// Routes
const generic = require('./routes/index');
app.use('/api/v1', generic);

const server = app.listen(process.env.PORT, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Server Listening at http://${host}:${port}`);
});
