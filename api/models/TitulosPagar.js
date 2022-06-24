'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const TitulosPagar = conection.define('Entrada',{
  
  codigo:{
    type: DataTypes.STRING,
  },

  data_vencimento:{
    type: DataTypes.DATE,
  },

  data_aberto:{
    type: DataTypes.DATE,
  },

  data_liquidacao:{
    type: DataTypes.DATE,
  },

  valor:{
    type: DataTypes.DOUBLE,
  },

  sacado:{
    type: DataTypes.STRING,
  },

  beneficios:{
    type: DataTypes.STRING,
  },

  situacao:{
    type: DataTypes.STRING,
  }

})

module.exports = Entrada