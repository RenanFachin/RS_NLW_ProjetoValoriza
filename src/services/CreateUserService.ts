import { prismaClient } from '../lib/prisma'

// Tipando as infos da request
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {

        // Verificando a existência de um conteúdo no parâmetro email
        if(!email){
            throw new Error('Email incorrect')
        }

        // Verificando se o usuário já existe
        const userAlreadyExists = await prismaClient.users.findFirst({
            where: {
                email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        
        const user = prismaClient.users.create({
            data: {
                name,
                email,
                admin
            }
        })


        return user
    }

}

export { CreateUserService }