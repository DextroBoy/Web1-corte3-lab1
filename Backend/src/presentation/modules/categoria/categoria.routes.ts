import { Router } from "express";
import { CategoriaController } from "./categoria.controller";

export class CategoriaRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new CategoriaController();

    router.get("/", controller.getAllCategorias);

    return router;
  }
}
