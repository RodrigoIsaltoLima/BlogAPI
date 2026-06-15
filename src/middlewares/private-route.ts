import { NextFunction, Resquest, Response } from 'express'
import { verifyRequest } from '../services/auth.service'
import { ExtendedRequest } from '../types/extendedrequest

export const privateRoute = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {

  const user = await verifyRequest(req)

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  req.user = user

  next()
}