const express = require("express");
const logger = require("morgan");
const cors = require('cors')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

//Http request looger middleware
app.use(logger("dev"));
app.use(cors())
app.use(express.json())

//GET method route:http://localhost:5000/
app.get("/", (req, res) => {
  return res.status(200).json({ message: "GET request to the homepage" });
});

//POST method route:http://localhost:5000/
app.post("/", (req, res) => {
  return res.status(201).json({ message: "POST request to the homepage" });
});

//PUT method route:http://localhost:5000/
app.put("/", (req, res) => {
    return res.status(200).json({ message: "PUT request to the homepage"});
});

//DELETE method route:http://localhost:5000/
app.delete("/", (req, res) => {
    return res.status(200).json({ message: "DELETE request to the homepage"});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
