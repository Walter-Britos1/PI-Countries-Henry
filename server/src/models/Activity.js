const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Definimos nuestro modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 },
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: { min:1, max:24 }
    },
    season: {
      type: DataTypes.ENUM(['Summer', 'Autumn', 'Winter', 'Spring']),
    },
    img: {
      type: DataTypes.STRING
    }
  }, { timestamps: false })
};