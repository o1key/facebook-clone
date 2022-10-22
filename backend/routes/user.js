const express = require("express");
const {
  register,
  activeAccount,
  login,
  auth,
  sendVerification,
} = require("../controllers/user");
const { authUser } = require("../middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activeAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);

module.exports = router;
