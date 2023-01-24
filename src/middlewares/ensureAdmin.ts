import { Response, Request, NextFunction } from "express";
import { prismaClient } from "../lib/prisma";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // pegando user_id (id do usuário) de dentro do request
    const { user_id } = request
    // console.log(user_id)


    // Verificar se o usuário é admin no db
    const isUserAdmin = await prismaClient.users.findFirst({
        where: {
            id: user_id
        },
    })

    // console.log(isUserAdmin.admin)

    if (isUserAdmin.admin) {
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized to create a new Tag."
    })
}