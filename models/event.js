'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    event_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    details: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    user_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
    friend_foreign_key: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
}, {
	sequelize,
	modelName: 'Event',
	tableName: 'event',
	timestamps: false
}) 
  return Event;
};