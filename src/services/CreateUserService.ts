import { prismaClient } from '../lib/prisma'
import { hash } from 'bcryptjs'

// Tipando as infos da request
interface IUserRequest {
    name: string;
    password: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin = false, password }: IUserRequest) {

        // Verificando a existência de um conteúdo no parâmetro email
        if (!email) {
            throw new Error('Email incorrect')
        }

        // Verificando se o usuário já existe
        const userAlreadyExists = await prismaClient.users.findFirst({
            where: {
                email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }


        // Criptografando a senaha do usuário antes de enviar para o db
        const passwordHashed = await hash(password, 8)

        const user = prismaClient.users.create({
            data: {
                name,
                email,
                admin,
                password: passwordHashed
            }
        })


        return (user)
    }

}

export { CreateUserService }