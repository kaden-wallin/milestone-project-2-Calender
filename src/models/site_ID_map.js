'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteIDmap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SiteIDmap.init({
    user_ID: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    friends_ID: {
    type: DataTypes.SMALLINT,
    allowNull: false
    },
}, {
	sequelize,
	modelName: 'SiteIDmap',
	tableName: 'siteIDmap',
	timestamps: false
})

  return SiteIDmap;
};