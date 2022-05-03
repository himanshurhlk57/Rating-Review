const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world bolte");
});

app.listen(port, (req, res) => {
  console.log(`Server is listening at port ${port}`);
});
