const express = require("express");
const router = express.Router();
const { postSessions } = require("../controller/sessionsController");

router.post("/", postSessions);

module.exports = router;
