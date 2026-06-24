import { RequestHandler, Response } from 'express';
import { ExtendedRequest } from '../types/extended-request';
import z from 'zod';
import { getUserById } from '../services/user.service';
import { handleCover } from '../services/post.service';

export const addPost = async (req: ExtendedRequest, res: Response) => {
  if (!req.user) return

  const schema = z.object({
    title: z.string(),
    tags: z.string(),
    body: z.string()
  })
  const data = schema.safeParse(req.body)
  if (!data.success) {
    return res.status(400).json({ error: data.error.flatten().fieldErrors })
  }
  if (!req.user) {
    return res.status(400).json({ error: 'Image is required'});
    }

    const coverName = await handleCover(req.file);
}

export const editPost: RequestHandler = async (req, res) => {
    res.json({ message: `Post ${req.params.slug} editado` });
};

export const deletePost: RequestHandler = async (req, res) => {
    res.json({ message: `Post ${req.params.slug} deletado` });
};

export const getAllPosts: RequestHandler = async (req, res) => {
    res.json({ message: "Obtendo todos os posts do admin" });
};

export const getPost: RequestHandler = async (req, res) => {
    res.json({ message: `Obtendo o post ${req.params.slug} do admin` });
};
