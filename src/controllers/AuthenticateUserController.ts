import { Response, Request } from "express";
import { z } from 'zod'
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const authenticateBody = z.object({
            email: z.string(),
            password: z.string()
        })

        // Recuperando as informações de dentro da requisição
        const { email, password } = authenticateBody.parse(request.body)

        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.execute({
            email,
            password
        })


        return response.json(token)
    }
}

export {AuthenticateUserController}