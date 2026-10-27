import { Router } from "express";
import { ExampleRoutes } from "./modules/example/example.routes";
import { CatalogRoutes } from "./modules/catalog/catalog.routes";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // Definir rutas
    apiRouter.use("/example", ExampleRoutes.routes);
    apiRouter.use("/catalog", CatalogRoutes.routes);

    router.use("/api", apiRouter);

    return router;
  }
}