import { prismaClient } from '../lib/prisma'

interface ITagRequest {
    name: string;
}

class CreateTagService {

    async execute({ name }: ITagRequest) {
        if (!name) {
            throw new Error("Invalid tag name")
        }

        const tagAlreadyExists = await prismaClient.tags.findFirst({
            where: {
                name
            }
        })

        if (tagAlreadyExists) {
            throw new Error("Tag already exists")
        }


        const newTag = prismaClient.tags.create({
            data: {
                name
            }
        })

        return newTag
    }
}

export { CreateTagService }