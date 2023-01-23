import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
    async handle(request: Request, response: Response) {
        // Recuperando as informações de dentro da requisição
        const { name, email, admin } = request.body;

        // instânciando o service
        const createUserService = new CreateUserService()

        // Passando as infos para dentro do service
        const user = await createUserService.execute({name, email, admin})

        return response.status(201).json(user)
    }
}

export { CreateUserController }