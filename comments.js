// Create web server with express

// Import express
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true });

// Import model
const Comment = require('./models/comment.model');

// Import router
const commentRouter = require('./routers/comment.router');

// Use router
app.use('/comments', commentRouter);

// Listen port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



