import { prismaClient } from "../lib/prisma"

class ListUsersService {

    async execute(){
        const users = await prismaClient.users.findMany({
            select: {
                name: true,
                id: true,
                email: true, 
            },
        })


        return users
    }

}

export { ListUsersService }