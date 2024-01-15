"use strict";

const express = require("express");
const asyncHandler = require("../../helpers/asyncHandler");
const userController = require("../../controllers/user.controller");
const router = express.Router();

router.post("/user/signup", asyncHandler(userController.signup));
router.post("/user/login", asyncHandler(userController.login));
router.post("/user/logout", asyncHandler(userController.logout));

module.exports = router;
