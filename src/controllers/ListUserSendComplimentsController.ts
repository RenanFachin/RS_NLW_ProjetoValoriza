import { Request, Response } from 'express'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'

class ListUserSendComplimentsController {
    async handle(request: Request, response: Response) {
        // parâmetro que vamos pegar do middleware (o user_senderId que na verdade é o user_id)
        const { user_id } = request

        const listUserSendCompliomentsService = new ListUserSendComplimentsService()

        const compliments = await listUserSendCompliomentsService.execute(user_id)


        return response.json(compliments)
    }
}

export { ListUserSendComplimentsController }