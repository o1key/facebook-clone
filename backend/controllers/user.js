const User = require("../models/User");
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../utils/validation");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    const checkEmail = await User.findOne({ email });
    if (checkEmail)
      res.status(400).json({
        message:
          "This email address already exists, try with a different email address",
      });

    if (!validateEmail(email))
      res.status(400).json({ message: "Invalid email address" });

    if (!validateLength(first_name, 3, 30)) {
      res.status(400).json({
        message: "first name must between 3 and 30 characters.",
      });
    }
    if (!validateLength(last_name, 3, 30)) {
      res.status(400).json({
        message: "last name must between 3 and 30 characters.",
      });
    }
    if (!validateLength(password, 6, 40)) {
      res.status(400).json({
        message: "password must be atleast 6 characters.",
      });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    // console.log(cryptedPassword);

    const newUsername = await validateUsername(first_name + last_name);
    const user = await new User({
      first_name,
      last_name,
      email,
      password: cryptedPassword,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
