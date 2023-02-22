'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    
    static associate({ User }) {
      Event.belongsTo(User, {
        foreignKey: "user_ID",
        as: "user"
      })
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
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    user_ID: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
}, {
	sequelize,
	modelName: 'Event',
	tableName: 'events',
	timestamps: false
}) 
  return Event;
};