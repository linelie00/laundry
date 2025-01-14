const { User } = require('../models');

const findUserByUsername = async (username) => {
  return await User.findOne({ where: { username } });
};

const createUser = async (username, password) => {
  return await User.create({ username, password });
};

module.exports = { findUserByUsername, createUser };
