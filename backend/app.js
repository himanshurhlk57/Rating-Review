const express = require("express");
const app = express();
const userRoutes = require("./routes/usersRoutes");
const sessionRoutes = require("./routes/sessionsRoutes");
const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/sessions", sessionRoutes);

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server is listening at port ${port}`);
});
