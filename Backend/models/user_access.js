'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Friend, Event, Report }) {
      User.hasMany(Friend, {
        foreignKey: "user_ID",
        as: "friends"
      })

      User.hasMany(Event, {
        foreignKey: "user_ID",
        as: "events"
      })

      User.hasMany(Report, {
        foreignKey: "user_ID",
        as: "reports"
      })
    }
  }
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user_access',
    timestamps: false
  })

  return User;
};