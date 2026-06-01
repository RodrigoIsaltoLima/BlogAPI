import { Router } from "express";

export const mainRouter = Router();

mainRouter.get("/teste", (req, res) => {
    res.json({ message: "API funcionando" });
});

mainRoutes.get("posts", mainController.getAllPosts);
mainRoutes.get("posts/:slug", mainController.getPost);
mainRoutes.get("/posts/:slug/related", mainController.getRelatedPosts);
