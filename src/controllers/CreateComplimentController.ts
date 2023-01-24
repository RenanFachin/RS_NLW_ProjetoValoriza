import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateComplimentService } from '../services/CreateComplimentService'

class CreateComplimentController {
    async handle(request: Request, response: Response) {

        const createNewCompliment = z.object({
            user_senderId: z.string(),
            user_receiverId: z.string(),
            message: z.string().min(10).max(220),
            tag_id: z.string()
        })

        const { user_senderId, user_receiverId, message, tag_id } = createNewCompliment.parse(request.body)

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute({ user_senderId, user_receiverId, message, tag_id })


        return response.status(201).json(compliment)
    }
}


export { CreateComplimentController }