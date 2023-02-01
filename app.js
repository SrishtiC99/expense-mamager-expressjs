const express = require('express');

const app = express();
const entriesRoute = require('./routes/entries');

// middlewares
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send("Hello");
});

app.use('/api/v1/entries', entriesRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
