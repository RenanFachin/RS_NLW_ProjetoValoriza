import { prismaClient } from "../lib/prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    // Infos necessárias para realizar a autenticação: Email e Password

    async execute({ email, password }: IAuthenticateRequest) {
        // Verificar se email existe
        const userExists = await prismaClient.users.findFirst({
            where: {
                email
            }
        })

        if (!userExists) {
            throw new Error("Email or Password incorrect.")
        }

        // Verificar se senha está correta (o método compare retorna um booleano)
        const passwordMatch = await compare(password, userExists.password)

        if (!passwordMatch) {
            throw new Error("Email or Password incorrect.")
        }

        // Gerar o token
        const token = sign(
            {
                // O que retorna no payload
                email: userExists.email
            },
                // Chave de verificação
            process.env.SECRET_JSONWEBTOKEN,
            {
                subject: userExists.id,
                expiresIn: "1d"
            }
        )

        return (token)
    }
}

export { AuthenticateUserService }