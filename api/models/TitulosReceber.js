'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const TitulosReceber = conection.define('Entrada',{
  
  Data:{
    type: DataTypes.DATE,
  },

  valor:{
    type: DataTypes.DOUBLE,
  },

  pagante:{
    type: DataTypes.STRING,
  },

  tipo_pagamento:{
    type: DataTypes.STRING,
  },

  situacao:{
    type: DataTypes.STRING,
  },

  nota_fiscal:{
    type: DataTypes.STRING,
  }
})

module.exports = Entrada