import { prismaClient } from "../lib/prisma"

class ListTagsService {
    async execute() {

        let tags = await prismaClient.tags.findMany({
            // Selecionando apenas os campos id e name para retornar no get
            select: {
                id: true,
                name: true,

            }
        })

        return tags

    }
}

export { ListTagsService }