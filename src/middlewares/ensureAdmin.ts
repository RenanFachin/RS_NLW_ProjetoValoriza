import { Response, Request, NextFunction } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Verificar se o usuário é admin
    const admin = true;

    if (admin) {
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized to create a new Tag."
    })
}