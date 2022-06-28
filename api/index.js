const express = require('express')
// const routes = require('./routes')

const app = express()

const conection = require ('./banco/conection')

//models
const User = require ('./models/User')

//controllers


//routes
const userRoutes = require ('./routes/userRoutes')
const fluxoDeCaixaRoutes = require ('./routes/fluxoDeCaixaRoutes')
const movimentacaoRoutes = require ('./routes/movimentacaoRoutes')
const titulosPagarRoutes = require ('./routes/titulosPagarRoutes')
const titulosReceberRoutes = require ('./routes/titulosReceberRoutes')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use('/', userRoutes)
app.use('/', fluxoDeCaixaRoutes)
app.use('/', movimentacaoRoutes)
app.use('/', titulosPagarRoutes)
app.use('/', titulosReceberRoutes)

conection.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))

// Resetar tabela (Limpeza)
// conn.sync({force: true}).then(()=> {
//     app.listen(3000)
// }).catch((err) => console.log(err))

module.exports = app