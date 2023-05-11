'use strict';
const bcrypt = require("bcryptjs")
const fs = require("fs")
const salt = bcrypt.genSaltSync(10);


const userData = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"))
  .map(el => {
    const hash = bcrypt.hashSync(el.password, salt);
    el.createdAt = el.updatedAt = new Date()
    el.password = hash
    return el
  })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', userData, {});
    /**
     * Add seed commands here.
     *
     * Example:
    */
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
