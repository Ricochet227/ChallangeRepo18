const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});