import { User } from "@prisma/client";
import { createJWT, verifyJWT } from "../libs/jwt";
import { TokenPayload } from "../types/token-payload";
import { geUserById } from "./user.service";
import { Request } from "express";

export const createToken = (user: User) => {
    return createJWT({ id: user.id, name: user.name, email: user.email });
}

export const verifyRequest = async (req: any) => {
    const { authorization } = req.headers
    if (authorization) {
        const token = authorization.split('Bearer ')[1]
        if (token) {
            const payload = verifyJWT(token)
            if (payload) {
                const userId = (payload as TokenPayload).userId
                const user = await geUserById(Number(userId))
                if (user) 
                    return user
            }
        }
    }
    return false
}