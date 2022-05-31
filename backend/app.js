const express = require("express");
const app = express();
const connectDB = require("./config/db");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const genuuid = require("uuid").v4;
const rating = require("./routes/ratingReview");
require("dotenv").config();

const api = require("./api");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MAX_AGE = 1000 * 60 * 60 * 3; // three hours

app.use(
  "/api",
  session({
    genid() {
      return genuuid(); // use UUIDs for session IDs
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  }),
  api
);

app.use("/rating", rating);

// serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("set it to production");
  });
}

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server is listening at port ${port}`);
});
