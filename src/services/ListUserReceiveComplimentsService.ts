import { prismaClient } from "../lib/prisma"


class ListUserReceiveComplimentsService {
    async execute(user_receiverId: string) {
        const compliments = await prismaClient.compliments.findMany({
            where: {
                user_receiverId
            },
        })


        return compliments
    }
}

export { ListUserReceiveComplimentsService }