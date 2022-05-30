const express = require("express");
const router = express.Router();

const usersRoutes = require("./routes/usersRoutes");
const sessionsRoutes = require("./routes/sessionsRoutes");

router.use("/users", usersRoutes);
router.use("/sessions", sessionsRoutes);

module.exports = router;
