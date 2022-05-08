const express = require("express");
const router = express.Router();
const { postUsers } = require("../controller/usersController");

router.post("/", postUsers);

module.exports = router;
