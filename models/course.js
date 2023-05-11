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
    InstructorDetailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Instructor Id cannot empty"
        },
        notNull: {
          msg: "Instructor Id cannot empty"
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Category cannot empty"
        },
        notNull: {
          msg: "Category cannot empty"
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name cannot empty"
        },
        notNull: {
          msg: "Name cannot empty"
        }
      }

    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description cannot empty"
        },
        notNull: {
          msg: "Description cannot empty"
        }
      }

    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Duration cannot empty"
        },
        notNull: {
          msg: "Duration cannot empty"
        },
        min: {
          args:30,
          msg:"Minimum course duration is 30 Minutes"
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Poster cannot empty"
        },
        notNull: {
          msg: "Poster cannot empty"
        }
      }

    }
  }, {
    hooks: {
      validationFailed: (instance, options, error) => {
        const dataValues = { ...instance.dataValues }
        const exclude = ["id", "createdAt", "updatedAt", "InstructorDetailId"]
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
    modelName: 'Course',
  });
  return Course;
};