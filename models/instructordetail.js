'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InstructorDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static istructorOwnedCourse(instructorId, modelCourse, modelCat, modelStudent) {
      const options = {
        include: {
          model: modelCourse,
          include: [modelCat, modelStudent]
        }
      }
      return this.findByPk(instructorId, options)
    }

    static associate(models) {
      // define association here
      this.belongsTo(models.User)
      this.hasMany(models.Course)
    }
  }
  InstructorDetail.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    education: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InstructorDetail',
  });
  return InstructorDetail;
};