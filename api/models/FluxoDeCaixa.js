'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const FluxoDeCaixa = conection.define('Estoque',{
  
  data:{
    type: DataTypes.DATE,
  },

  decricao:{
    type: DataTypes.STRING,
  },

  credito:{
    type: DataTypes.BOOLEAN,
  },

  debito:{
    type: DataTypes.BOOLEAN,
  },
})

module.exports = Estoque