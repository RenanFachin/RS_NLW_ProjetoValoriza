import { prismaClient } from "../lib/prisma";


class ListUserSendComplimentsService {
    async execute(user_senderId: string) {
        const compliments = await prismaClient.compliments.findMany({
            where: {
                user_senderId
            }
        })


        return compliments
    }
}

export { ListUserSendComplimentsService }