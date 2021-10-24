const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// conneting to Database
mongoose.connect('mongodb://localhost/express-app')
    .then(() => console.log('Successfully connected to Database'))
    .catch((err) => console.log('Error', err))

// importing routers 
const postsRouter = require('./routes/postsRoutes');

// importing middleware
const info = require('./middleware/info')

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(info);

app.use('/api/v1/posts', postsRouter);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));