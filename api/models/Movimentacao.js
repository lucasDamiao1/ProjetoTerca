'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const Movimentacao = conection.define('Movimentacao',{
  
  id_estoque:{
    type: DataTypes.NUMBER,
  },

  id_entrada:{
    type: DataTypes.NUMBER,
  },

  id_saida:{
    type: DataTypes.NUMBER,
  }
})

module.exports = Movimentacao