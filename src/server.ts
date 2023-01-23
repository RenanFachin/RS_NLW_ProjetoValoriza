// Variáveis de ambiente
import 'dotenv/config'

// Express
import express, { NextFunction, Request, Response } from 'express'

import "express-async-errors"

// importar o router
import { router } from './routes'

// Inicializando o express
const app = express()

// Dizendo para o express entender o json como parâmetro
app.use(express.json())

// Inicializar as rotas
app.use(router)


// Middleware de erro
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    // Verificando se é um erro "tratado" pela aplicação (throw new error)
    if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
    }

    return response.status(500).json({ status: "error", message: "Internal Server Error" })
})


const PORT = process.env.PORT
// Criando o servidor
app.listen(process.env.PORT, () => console.log(`Server is running at ${PORT}`))

