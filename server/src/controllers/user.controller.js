"use strict";

const { CREATED, SuccessResponse } = require("../core/success.response");
const UserService = require("../services/user.service");

class UserController {
  login = async (req, res, next) => {
    new SuccessResponse({
      message: "User login successfully",
      metadata: await UserService.login(req.body),
    }).send(res);
  };
  signup = async (req, res, next) => {
    new CREATED({
      message: "User register successfully",
      metadata: await UserService.signup(req.body),
    }).send(res);
  };
  logout = async (req, res, next) => {
    new SuccessResponse({
      message: "User logout successfully",
      metadata: await UserService.logout(req.body),
    }).send(res);
  };
}

module.exports = new UserController();
