import { RequestHandler } from 'express';

export const addPost: RequestHandler = async (req, res) => {
    res.json({ message: "Post criado" });
};

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
