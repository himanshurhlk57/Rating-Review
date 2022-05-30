const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const SignupCredential = require("../models/signup");
const LoginCredential = require("../models/login");

router.post("/", async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ error: "Email and Password not present in request" });
  }

  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!email) {
    return res.status(400).send({ error: "Email not present in request" });
  }

  if (!password) {
    return res.status(400).send({ error: "Password not present in request" });
  }

  const userLogined = await LoginCredential.findOne({ email });

  if (userLogined) {
    return res.status(400).send({ error: "User already signed up" });
  }

  const hash = bcrypt.hashSync(password);

  try {
    const signupCredential = new SignupCredential({
      firstName,
      lastName,
      email,
      password: hash,
      confirmPassword: hash,
    });
    await signupCredential.save();
    const loginCredential = new LoginCredential({
      _id: signupCredential.id,
      email,
      password: hash,
    });
    await loginCredential.save();
    res.status(201).send({ id: loginCredential.id });
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
    console.log(err);
  }
});

module.exports = router;
