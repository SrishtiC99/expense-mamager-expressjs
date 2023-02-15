const express = require('express');
// Roters
const entriesRoute = require('./routes/entries');
const usersRoute = require('./routes/users');
const tagsRoute = require('./routes/tags');
const frontendRoute = require('./routes/front-end');
const authRoute = require('./routes/auth');

const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const authenticateUser = require('./middlewares/auth');

const app = express();
// middlewares
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/entries', authenticateUser, entriesRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/tags', authenticateUser, tagsRoute);
app.use('/api/v1/home', frontendRoute);
app.use('/api/v1/auth', authRoute);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected to db")
    app.listen(port, () => console.log(`Server is running at port: ${port}`));
  } catch (e) {
    console.log(e);
  }
}

start();
