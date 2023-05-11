'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category)
      this.belongsTo(models.InstructorDetail)
      this.belongsToMany(models.StudentDetail, { through: "StudentCourses" })
    }
  }
  Course.init({
    InstructorDetailId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    poster: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};