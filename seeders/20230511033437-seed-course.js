'use strict';

const fs = require("fs")

const courseData = JSON.parse(fs.readFileSync("./data/courses.json", "utf-8"))
  .map(el => {
    el.createdAt = el.updatedAt = new Date()
    return el
  })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Courses', courseData, {});
    /**
     * Add seed commands here.
     *
     * Example:
    */
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Courses', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};