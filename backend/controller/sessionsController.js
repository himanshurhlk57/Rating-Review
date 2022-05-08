// desc login POST sessions
// route POST /api/sessions

const postSessions = (req, res) => {
  const { email, password } = req.body;
  res.json({ sessions: { email: email, password: password } });
};

module.exports = {
  postSessions,
};
