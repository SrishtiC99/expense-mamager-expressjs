const express = require('express');
const entriesRoute = require('./routes/entries');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();
// middlewares
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send("Hello");
});

app.use('/api/v1/entries', entriesRoute);

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
