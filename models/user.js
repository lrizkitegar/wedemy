'use strict';
const bcrypt = require("bcryptjs")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.StudentDetail)
      this.hasOne(models.InstructorDetail)
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg:"Email field cannot be empty!"
        },
        notEmpty: {
          msg:"Email field cannot be empty!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg:"Password field cannot be empty!"
        },
        notEmpty: {
          msg:"Password field cannot be empty!"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (instance) => {
        let password = instance.password
        instance.role = "Student"
        const salt = bcrypt.genSaltSync(10);
        if (password) password = bcrypt.hashSync(password, salt);
        instance.password = password
      },
      validationFailed: (instance, options, error) => {
        const dataValues = { ...instance.dataValues }
        const exclude = ["id", "createdAt", "updatedAt", "role","password"]
        let errList = {}
        for (const field in dataValues) {
          if (!exclude.includes(field) && dataValues[field]) {
            errList[`${field}Curr`] = dataValues[field]
          }
        }
        error.errors.forEach(el => {
          errList[`${el.path}Err`] = (el.message)
        })
        errList = new URLSearchParams(errList).toString()
        error.errList = errList
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};