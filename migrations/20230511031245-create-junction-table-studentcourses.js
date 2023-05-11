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
      CourseId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:"Courses"
          },
          key: "id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
