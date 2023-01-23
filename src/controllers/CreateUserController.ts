import { Request, Response } from 'express'
import { z } from 'zod'

import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
    async handle(request: Request, response: Response) {
        // Validação de dados de entrada com o zod
        const createUserBody = z.object({
            name: z.string(),
            email: z.string(),
            admin: z.boolean()
        })

        // Recuperando as informações de dentro da requisição
        const { name, email, admin } = createUserBody.parse(request.body)

        // instânciando o service
        const createUserService = new CreateUserService()

        // Passando as infos para dentro do service
        const user = await createUserService.execute({ name, email, admin })

        return response.status(201).json(user)
    }
}

export { CreateUserController }