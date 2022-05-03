const {Sequelize} = require ('sequelize')

const db = new Sequelize ('dbprojeto', 'root', '', {
    host:"localhost",
    dialect: "mysql",
})

try{
    db.authenticate()
    console.log('Banco conectado com sucesso!')
}catch(error){
    console.log(error)
}

module.exports = db