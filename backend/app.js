const express = require("express");
const app = express();
const userRoutes = require("./routes/usersRoutes");
const sessionRoutes = require("./routes/sessionsRoutes");
const connectDB = require("./config/db");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
require("dotenv").config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      autoRemove: "native",
    }),
    cookie: {
      maxAge: oneDay,
    },
  })
);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/users", userRoutes);
app.use("/sessions", sessionRoutes);

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server is listening at port ${port}`);
});
