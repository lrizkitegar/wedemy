'use strict';
const fs = require("fs")

const categoryData = JSON.parse(fs.readFileSync("./data/categories.json", "utf-8"))
  .map(el => {
    el.createdAt = el.updatedAt = new Date()
    return el
  })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', categoryData, {});
    /**
     * Add seed commands here.
     *
     * Example:
    */
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
