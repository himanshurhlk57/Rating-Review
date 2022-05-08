const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world bolte");
});

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server is listening at port ${port}`);
});
