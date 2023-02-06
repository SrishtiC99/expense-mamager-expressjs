const express = require('express');
const entriesRoute = require('./routes/entries');
const usersRoute = require('./routes/users');
const tagsRoute = require('./routes/tags');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/not-found');

const app = express();
// middlewares
app.use(express.json());

// routes
app.use('/api/v1/entries', entriesRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/tags', tagsRoute);
app.use(notFound);

const PORT = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected to db")
    app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
