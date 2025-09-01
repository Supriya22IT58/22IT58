const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ msg: "Email required" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = authMiddleware;
