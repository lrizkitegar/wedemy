'use strict';
const fs = require("fs")

const instructorDetailData = JSON.parse(fs.readFileSync("./data/instructordetails.json", "utf-8"))
  .map(el => {
    el.createdAt = el.updatedAt = new Date()
    return el
  })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('InstructorDetails', instructorDetailData, {});
    /**
     * Add seed commands here.
     *
     * Example:
    */
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('InstructorDetails', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};