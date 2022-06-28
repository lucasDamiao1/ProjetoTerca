'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const FluxoDeCaixa = conection.define('FluxoDeCaixa',{
  
  data:{
    type: DataTypes.DATE,
  },

  decricao:{
    type: DataTypes.STRING,
  },

  credito:{
    type: DataTypes.DOUBLE,
  },

  debito:{
    type: DataTypes.DOUBLE,
  },
})

module.exports = FluxoDeCaixa