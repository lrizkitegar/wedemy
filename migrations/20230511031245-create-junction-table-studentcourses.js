'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('StudentCourses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StudentDetailId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:"StudentDetails"
          },
          key: "id",
        }
      },
      CoursesId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:"Courses"
          },
          key: "id",
        }
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     */
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('StudentCourses');
    /**
     * Add reverting commands here.
     *
     * Example:
     */
  }
};
