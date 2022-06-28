'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const TitulosReceber = conection.define('TitulosReceber',{
  
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

module.exports = TitulosReceber