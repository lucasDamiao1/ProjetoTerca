'use strict';
const {DataTypes} = require ('sequelize')

const conection = require ('../banco/conection')

const User = conection.define('User',{
  
  name:{
    type: DataTypes.STRING,
  },

  email:{
    type: DataTypes.STRING,
  },

  senha:{
    type: DataTypes.STRING,
  },

  CPF:{
    type: DataTypes.STRING,
  },

  datanasci:{
    type: DataTypes.DATE,
  },
})

module.exports = User