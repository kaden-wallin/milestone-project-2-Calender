'use strict';
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
    }
  }
  User.init({
    user_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    user_data: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    event_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
    access_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
    friend_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
}, {
	sequelize,
	modelName: 'User',
	tableName: 'user',
	timestamps: false
})

  return User;
};