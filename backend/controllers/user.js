const jwt = require("jsonwebtoken");
const User = require("../models/User");
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../utils/validation");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/token");
const { sendVerificationEmail } = require("../utils/mailer");

// register
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
      return res.status(400).json({
        message:
          "This email address already exists, try with a different email address",
      });

    if (!validateEmail(email))
      return res.status(400).json({ message: "Invalid email addreturn ress" });

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: "first name must between 3 and 30 characters.",
      });
    }
    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: "last name must between 3 and 30 characters.",
      });
    }
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
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

    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m" // expires in 30m
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);
    const token = generateToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: "Register Success! Please activate your email to start",
    });
    // res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// activate account
exports.activeAccount = async (req, res) => {
  try {
    const validUser = req.user.id;

    const { token } = req.body;
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const check = await User.findById(user.id);

    if (validUser !== user.id) {
      return res.status(400).json({
        message: "You don't have the authorization to complete this operation.",
      });
    }

    if (check.verified === true) {
      return res.status(400).json({
        message: "This email is already activated",
      });
    } else {
      await User.findByIdAndUpdate(user.id, {
        verify: true,
      });
      return res.status(200).json({
        message: "Account has been activated successfully.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "The email address you entered is not connected to an account",
      });
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).json({
        message: "Invalid credential. Please try again",
      });
    }

    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: "Register Success! Please activate your email to start",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
