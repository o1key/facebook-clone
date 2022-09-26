const express = require("express");
const { register, activeAccount } = require("../controllers/user");

const router = express.Router();

router.post("/register", register);
router.post("/activate", activeAccount);

module.exports = router;
