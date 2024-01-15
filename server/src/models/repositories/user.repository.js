"use strict";

const { convertToObjectIdMongodb } = require("../../utils");
const User = require("../user.model");

const findUserById = async (userId) => {
  return await User.findOne({
    _id: convertToObjectIdMongodb(userId),
  }).lean();
};

const findUserByEmail = async (email) => {
  return await User.findOne({
    email,
  }).lean();
};

module.exports = {
  findUserById,
  findUserByEmail,
};
