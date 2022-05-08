// desc signup POST users
// route POST /api/users

const postUsers = async (req, res) => {
  const { email, password } = req.body;
  res.json({ users: { email: email, password: password } });
};

module.exports = {
  postUsers,
};
