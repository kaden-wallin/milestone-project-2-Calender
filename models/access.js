'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Access extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Access.init({
    access_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    access_type: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    event_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
    friends_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
    user_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
}, {
	sequelize,
	modelName: 'Access',
	tableName: 'access',
	timestamps: false
})

  return Access;
};