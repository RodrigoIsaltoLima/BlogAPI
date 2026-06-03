import { prisma } from '../libs/prisma';
import bcrypt from 'bcryptjs';

type createUserProps = {
  name: string;
  email: string;
  password: string;
};

export const createUser = async ({ name, email, password }: createUserProps) => {
    email = email.toLowerCase();

    const user = await prisma.user.findFirst({
        where: { email }
    });

    if (user) { 
        return false;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    return newUser;
};