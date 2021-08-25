const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('VideoGame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false
  }
  )};
