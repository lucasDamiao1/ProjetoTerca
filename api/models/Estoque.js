'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const Estoque = conection.define('Estoque',{
  
  quantidade:{
    type: DataTypes.NUMBER,
  },

  uso:{
    type: DataTypes.NUMBER,
  }
})

module.exports = Estoque