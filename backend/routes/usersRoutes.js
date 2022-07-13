const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const SignupCredential = require("../models/signup");
const User = require("../models/user");

router.post("/", async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ error: "Email and Password not present in request" });
  }

  const { fullName, email, password, confirmPassword } = req.body;

  if (!fullName) {
    return res.status(400).send({ error: "Full Name is not present" });
  }

  if (!email) {
    return res.status(400).send({ error: "Email not present in request" });
  }

  if (!password) {
    return res.status(400).send({ error: "Password not present in request" });
  }
  if (!confirmPassword) {
    return res
      .status(400)
      .send({ error: "Confirm Password not present in request" });
  }
  if (password !== confirmPassword) {
    return res.status(400).send({ error: "Password doesn't matches" });
  }
  const userSignup = await User.findOne({ email });
  try {
    if (userSignup) {
      return res.status(400).send({ error: "User already signed up" });
    }

    const hash = bcrypt.hashSync(password);

    const signupCredential = new SignupCredential({
      fullName,
      email,
      password: hash,
      confirmPassword: hash,
    });
    await signupCredential.save();
    const user = new User({
      _id: signupCredential.id,
      email,
      password: hash,
    });
    await user.save();
    res.status(201).send({ id: user.id });
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
    console.log(err);
  }
});

module.exports = router;
