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
    event_ID: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    event_title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    event_location: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    site_ID_map: {
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