const express = require("express");
const { register, activeAccount, login } = require("../controllers/user");

const router = express.Router();

router.post("/register", register);
router.post("/activate", activeAccount);
router.post("/login", login);

module.exports = router;
