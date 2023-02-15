'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Report.init({
    report_user_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    report_user_email: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    site_ID_map: {
      type: DataTypes.SMALLINT,
      allowNull: false
      },
}, {
	sequelize,
	modelName: 'Report',
	tableName: 'report',
	timestamps: false
});
  return Report;
};