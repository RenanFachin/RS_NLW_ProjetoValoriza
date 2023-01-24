import { prismaClient } from "../lib/prisma"


class ListUserReceiveComplimentsService {
    async execute(user_receiverId: string) {
        const compliments = await prismaClient.compliments.findMany({
            where: {
                user_receiverId
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

export { ListUserReceiveComplimentsService }