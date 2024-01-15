"use strict";

const { BadRequestError, AuthFailureError } = require("../core/error.response");
const {
  findUserByEmail,
  findUserByUsername,
} = require("../models/repositories/user.repository");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const KeyService = require("./key.service");
const { createTokenPair } = require("../auth/authUtils");
const crypto = require("crypto");
const { getInfoData } = require("../utils");

class UserService {
  static login = async ({ email, password }) => {
    const userFound = await findUserByEmail({ email });
    if (!userFound) {
      throw new BadRequestError("Email not exists");
    }
    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if (!passwordMatch) {
      throw new AuthFailureError("Password not match");
    }
    const privateKey = crypto.randomBytes(64).toString("hex");
    const publicKey = crypto.randomBytes(64).toString("hex");
    const { _id: userId } = userFound;
    const tokens = await createTokenPair(
      { userId, email },
      privateKey,
      publicKey
    );
    const keyStore = await KeyService.createKeyToken({
      userId,
      privateKey,
      publicKey,
      refreshToken: tokens.refreshToken,
    });
    if (!keyStore) {
      throw new BadRequestError("Error when create key token");
    }
    return {
      shop: getInfoData({
        fields: ["_id", "name", "email"],
        object: userFound,
      }),
      tokens,
    };
  };
  static signup = async ({ email, username, password, birthday, gender }) => {
    const userFound = await findUserByEmail({ email });
    const foundUsername = await findUserByUsername({ username });
    if (userFound) {
      throw new BadRequestError("Email already exists");
    }
    if (foundUsername) {
      throw new BadRequestError("Username already exists");
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
      // create token pair
      const tokens = await createTokenPair(
        { userId: newUser._id, email },
        privateKey,
        publicKey
      );
      console.log("Created tokens success::", tokens);
      // save privateKey and publicKey to database
      const keyStore = await KeyService.createKeyToken({
        userId: newUser._id,
        privateKey,
        publicKey,
        refreshToken: tokens.refreshToken,
      });
      if (!keyStore) {
        throw new BadRequestError("Error when create key token");
      }
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
