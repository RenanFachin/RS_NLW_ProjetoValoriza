import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateComplimentService } from '../services/CreateComplimentService'

class CreateComplimentController {
    async handle(request: Request, response: Response) {

        const createNewCompliment = z.object({
            user_receiverId: z.string(),
            message: z.string().min(10).max(220),
            tag_id: z.string()
        })

        // Parâmetros que vem pelo body da requisição
        const { user_receiverId, message, tag_id } = createNewCompliment.parse(request.body)

        // parâmetro que vamos pegar do middleware (o user_senderId que na verdade é o user_id)
        const { user_id } = request


        const createComplimentService = new CreateComplimentService()


        const compliment = await createComplimentService.execute(
            {
                // Dizendo que o user_senderID é o user_id
                user_senderId: user_id,
                user_receiverId,
                message,
                tag_id
            }
        )


        return response.status(201).json(compliment)
    }
}


export { CreateComplimentController }