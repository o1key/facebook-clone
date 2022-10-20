const express = require("express");
const { register, activeAccount, login } = require("../controllers/user");
const { authUser } = require("../models/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activeAccount);
router.post("/login", login);

module.exports = router;
