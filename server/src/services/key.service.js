"use strict";

const keyModel = require("../models/key.model");

class KeyService {
  static createKeyToken = async ({
    userId,
    privateKey,
    publicKey,
    refreshToken,
  }) => {
    try {
      const filter = { userId };
      const update = {
        privateKey,
        publicKey,
        refreshToken,
        refreshTokensUsed: [],
      };
      const options = { upsert: true, new: true };
      const tokens = await keyModel.findOneAndUpdate(filter, update, options);
      return tokens ? tokens.publicKey : null;
    } catch (error) {
      return error;
    }
  };
}

module.exports = KeyService;
