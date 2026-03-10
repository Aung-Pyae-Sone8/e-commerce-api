import {JwtPayload} from 'jsonwebtoken'

// to make the file a module and avoif the TypeScript error 
export {};

export interface MyTokenPayload extends JwtPayload {
    userId: number; // or string, depending on your DB
}

declare global {
    namespace Express {
        export interface Request {
            userId?: Number;
            role?: string;
            cleanBody?: any;
        }
    }
}