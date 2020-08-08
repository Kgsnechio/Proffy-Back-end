import express from 'express'
import routes from './routes'

const app = express()    // a constante app é uma função express

app.use(express.json())

app.use(routes)

//localhost:3333/rota
app.listen(3333)   // metodo que alguarda a requisição do front end atravez da porta 3333