import { prismaClient } from "../lib/prisma";


class ListUserSendComplimentsService {
    async execute(user_senderId: string) {
        const compliments = await prismaClient.compliments.findMany({
            where: {
                user_senderId
            },
            // Fazendo retornar o objeto completo de informações do relacionamento
            include: {
                receiver: true,
                sender: true,
                tag: true
            }
        })


        return compliments
    }
}

export { ListUserSendComplimentsService }