// Variáveis de ambiente
import 'dotenv/config'

// Express
import express from 'express'

import "express-async-errors"

// importar o router
import { router } from './routes'
import { verifyError } from './utils/verifyError'

// Inicializando o express
const app = express()

// Dizendo para o express entender o json como parâmetro
app.use(express.json())

// Inicializar as rotas
app.use(router)


// Tratametno de de erro
app.use(verifyError)


const PORT = process.env.PORT
// Criando o servidor
app.listen(process.env.PORT, () => console.log(`Server is running at ${PORT}`))

