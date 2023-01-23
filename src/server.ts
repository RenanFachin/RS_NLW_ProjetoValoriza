import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'

// Inicializando o express
const app = express()


const PORT = process.env.PORT
// Criando o servidor
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))

