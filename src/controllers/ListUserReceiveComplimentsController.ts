import { Request, Response } from 'express'
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService'

class ListUserReceiveComplimentsController {

    async handle(request: Request, response: Response) {
        // parâmetro que vamos pegar do middleware (o user_senderId que na verdade é o user_id)
        const { user_id } = request

        const listUserReceiveCompliomentsService = new ListUserReceiveComplimentsService()

        const compliments = await listUserReceiveCompliomentsService.execute(user_id)


        return response.json(compliments)
    }
}

export { ListUserReceiveComplimentsController }