"use strict";

const { BadRequestError } = require("../core/error.response");
const { findUserByEmail } = require("../models/repositories/user.repository");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const KeyService = require("./key.service");
const { createTokenPair } = require("../auth/authUtils");
const crypto = require("crypto");
const { getInfoData } = require("../utils");

class UserService {
  static login = async ({}) => {};
  static signup = async ({ email, username, password, birthday, gender }) => {
    const userFound = await findUserByEmail();
    if (userFound) {
      throw new BadRequestError("Email already exists");
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      email,
      username,
      password: passwordHash,
      birthday,
      gender,
    });
    if (newUser) {
      // create privateKey and publicKey
      const privateKey = crypto.randomBytes(64).toString("hex");
      const publicKey = crypto.randomBytes(64).toString("hex");
      // save privateKey and publicKey to database
      const keyStore = await KeyService.createKeyToken({
        userId: newUser._id,
        privateKey,
        publicKey,
      });
      if (!keyStore) {
        throw new BadRequestError("Error when create key token");
      }
      // create token pair
      const tokens = await createTokenPair(
        { userId: newUser._id, email },
        privateKey,
        publicKey
      );
      console.log("Created tokens success::", tokens);
      return {
        code: 201,
        metadata: {
          user: getInfoData({
            fields: ["_id", "username", "email"],
            object: newUser,
          }),
          tokens,
        },
      };
    }
    return {
      code: 200,
      metadata: null,
    };
  };
  static logout = async ({}) => {};
}

module.exports = UserService;
