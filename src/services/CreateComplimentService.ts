import { prismaClient } from "../lib/prisma";

interface IComplimentRequest {
    tag_id: string;
    user_senderId: string;
    user_receiverId: string;
    message: string;
}

class CreateComplimentService {
    async execute({ user_senderId, user_receiverId, message, tag_id }: IComplimentRequest) {

        // Verificar se o user_receiverId é um usuário existente
        const userReceiverExists = await prismaClient.users.findFirst({
            where: {
                id: user_receiverId
            }
        })

        // Verificar se o user sender é diferente do receiver
        if (user_senderId === user_receiverId) {
            throw new Error("Incorrect user Receiver")
        }

        if (!userReceiverExists) {
            throw new Error("User receiver does not exists")
        }

        const compliment = await prismaClient.compliments.create({
            data: {
                tag_id,
                user_senderId,
                user_receiverId,
                message
            }
        })


        return (compliment)

    }
}

export { CreateComplimentService }