import { Response, Request, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receber o token
    const authToken = request.headers.authorization

    // Validar se o token é está preenchido (ele vem no formato "Bearer token")
    if (!authToken) {
        return response.status(401).end()
    }

    // Fazendo um slit e retirando o bearer de junto do token
    const [, token] = authToken.split(" ")

    // Validar se o token é válido (com a função verify do jsonwebtoken)
    try {
        // o decode vai trazer o conteúdo do usuário de dentro do token (email, iat, exp, sub(id do usuário))
        const { sub } = verify(token, process.env.SECRET_JSONWEBTOKEN) as IPayload

        // Recuperando o id do usuário e as informações dele
        // OBS: É PRECISO TIPAR O USER_ID no @types de request
        // OBS2: É preciso dizer que o sub é uma string e não uma função (tipando o verify como IPayLoad)
        // OBS3: é preciso liberar o typeroots de do tsconfig
        
        request.user_id = sub

        return next()
    } catch (error) {
        return response.status(401).end()
    }
    



}