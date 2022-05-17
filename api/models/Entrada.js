'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const Entrada = conection.define('Entrada',{
  
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
  },

  forma_pagamento:{
    type: DataTypes.STRING,
  }
})

module.exports = Entrada