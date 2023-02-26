'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {

    static associate({ User }) {
      Friend.belongsTo(User, {
        foreignKey: "user_ID",
        as: "user"
      })
    }
  }
  Friend.init({
    friend_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_ID: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    accepted_friends: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Friend',
    tableName: 'friends',
    timestamps: false
  })

  return Friend;
};
