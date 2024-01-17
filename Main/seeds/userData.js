const { User } = require("../models");

const userdata = [
  {
    username: "Brett",
    password: "password1",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;