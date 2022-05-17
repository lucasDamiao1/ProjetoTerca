'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const Saida = conection.define('Saida',{
  
  id_produto:{
    type: DataTypes.NUMBER,
  },

  tipo:{
    type: DataTypes.STRING,
  },

  valor:{
    type: DataTypes.DOUBLE,
  },

  quantidade:{
    type: DataTypes.NUMBER,
  }
})

module.exports = Saida