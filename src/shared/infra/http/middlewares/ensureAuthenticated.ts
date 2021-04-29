import { Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import { verify } from 'jsonwebtoken';
import auth from '@config/auth';

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuth(
    req: Request,
    res: Response,
    nex: NewableFunction,
): void {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('Falta o token');
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, auth.jwt.secret);

        const { sub } = decoded as ITokenPayload;

        req.user = { id: sub };

        return nex();
    } catch {
        throw new AppError('token invalido');
    }
}
