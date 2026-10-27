import { Router } from "express";
import { CatalogController } from "./catalog.controller";

export class CatalogRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CatalogController();

    router.get("/categories", controller.getCategories);
    router.get("/movies", controller.getMovies);

    return router;
  }
}
