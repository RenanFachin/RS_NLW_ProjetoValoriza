import { Request, Response } from 'express'
import { z } from 'zod'

import { CreateTagService } from '../services/CreateTagService'

class CreateTagController {
    async handle(request: Request, response: Response) {
        // Validação de dados de entrada com o zod
        const createTagBody = z.object({
            name: z.string(),
        })

        // Recuperando as informações de dentro da requisição
        const { name } = createTagBody.parse(request.body)

        const createTagService = new CreateTagService()

        // Passando as infos para dentro do service
        const tag = await createTagService.execute({ name })

        return response.status(201).json(tag)
    }
}

export { CreateTagController }