'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const Movimentacao = conection.define('Movimentacao',{
  
  data:{
    type: DataTypes.DATE,
  },

  nota_fiscal:{
    type: DataTypes.STRING,
  },

  valor:{
    type: DataTypes.NUMBER,
  },

  tipo_movimentacao:{
    type: DataTypes.STRING,
  },

  cod_transacao:{
    type: DataTypes.STRING,
  },
})

module.exports = Movimentacao