import { User } from '@prisma/client';
import { Request } from 'express';
import type { File as MulterFile } from 'multer';

type UserWithoutPassword = Omit<User, 'password'>;

export type ExtendedRequest = Request & {
    user?: UserWithoutPassword
}