const express = require("express");
const router = express.Router();
const Auth = require('../middleware/auth');

const ProfileController = require('../controller/profile');

router.post("/login", ProfileController.login);
router.post("/createProfile", ProfileController.createProfile);
router.get("/profileDetails", Auth, ProfileController.profileDetails);


module.exports = router;
