import { Router } from "express";
import * as mainController from "../controllers/main.controller";

export const mainRouter = Router();

mainRouter.get("/teste", (req, res) => {
    res.json({ message: "API funcionando" });
});

mainRouter.get("/posts", mainController.getAllPosts);
mainRouter.get("/posts/:slug", mainController.getPost);
mainRouter.get("/posts/:slug/related", mainController.getRelatedPosts);
