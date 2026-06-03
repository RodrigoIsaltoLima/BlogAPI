import { RequestHandler } from "express";
import { z } from "zod";
import { createUser } from "../services/user.service";

export const signIn: RequestHandler = (req, res) => {
    //
};

export const signUp: RequestHandler = async (req, res) => {
    const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string()
    });
    const data = schema.safeParse(req.body);
    if (!data.success) {
        res.status(400).json({ errors: data.error.flatten().fieldErrors });
        return;
    }
    const newUser = await createUser(data.data)
    if (!newUser) {
        res.status(400).json({ message: "Email já cadastrado" });
        return;
    }

    const token = "123";
    res.status(201).json({
        message: "Usuário criado com sucesso",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        },
        token
    });
};

export const validate: RequestHandler = (req, res) => {
    //
};
