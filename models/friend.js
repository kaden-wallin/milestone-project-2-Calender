'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Friend.init({
    friend_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    friend_list: { 
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
    user_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
}, {
	sequelize,
	modelName: 'Friend',
	tableName: 'friend',
	timestamps: false
})

  return Friend;
};