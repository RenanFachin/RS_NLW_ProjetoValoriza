import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'

// Inicializando o express
const app = express()

app.get('/test', (request, response) => {
    return response.send("Olá NLW")
})

app.post('/test-post', (request, response) => {
    return response.send("Olá NLW método POST")
})


const PORT = process.env.PORT
// Criando o servidor
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))

