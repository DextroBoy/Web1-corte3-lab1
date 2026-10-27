import { Router } from "express";
import { MovieController } from "./movie.controller";

export class MovieRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new MovieController();

    router.get("/", controller.getAllMovies);

    return router;
  }
}
