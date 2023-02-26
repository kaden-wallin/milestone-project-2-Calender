'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {

    static associate({ User }) {
      Report.belongsTo(User, {
        foreignKey: "user_ID",
        as: "user"
      })
    }
  }
  Report.init({
    reported_user_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    report_user_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_ID: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Report',
    tableName: 'reported_users',
    timestamps: false
  });
  return Report;
};