import { Request, Response, NextFunction } from 'express'

export function verifyError(err: Error, request: Request, response: Response, next: NextFunction) {
    // Verificando se é um erro "tratado" pela aplicação (throw new error)
    if (err instanceof Error) {
        return response.status(400).json(
            {
                error: err.message
            }
        )
    }

    return response.status(500).json(
        {
            status: "error",
            message: "Internal Server Error"
        }
    )
}