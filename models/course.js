'use strict';

const {
  Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static notOwnedCourse(arrOwned, modelCat, search) {
      const options = {
        include: {
          model: modelCat
        },
        where: {
          id: {
            [Op.notIn]: arrOwned
          }
        }
      }
      if (search) {
        options.where.name = {
          [Op.iLike] : `%${search}%`
        }
      }
      return this.findAll(options)
    }

    static ownedCourse(arrOwned, modelCat, search) {
      const options = {
        include: {
          model: modelCat
        },
        where: {
          id: {
            [Op.in]: arrOwned
          }
        }
      }
      if (search) {
        options.where.name = {
          [Op.iLike] : `%${search}%`
        }
      }
      return this.findAll(options)
    }

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