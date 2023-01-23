// Variáveis de ambiente
import 'dotenv/config'

// Express
import express from 'express'

// importar o router
import { router } from './routes'

// Inicializando o express
const app = express()

// Dizendo para o express entender o json como parâmetro
app.use(express.json())

// Inicializar as rotas
app.use(router)

const PORT = process.env.PORT
// Criando o servidor
app.listen(process.env.PORT, () => console.log(`Server is running at ${PORT}`))

