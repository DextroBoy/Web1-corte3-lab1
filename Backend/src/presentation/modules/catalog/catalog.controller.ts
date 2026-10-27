import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { CatalogService } from "./catalog.service";

export class CatalogController {
  private readonly catalogService = new CatalogService();

  getCategories = (req: Request, res: Response): void => {
    this.catalogService.getCategories()
      .then((categories) => res.status(200).json(categories))
      .catch((error) => HandleError.error(error, res));
  };

  getMovies = (req: Request, res: Response): void => {
    this.catalogService.getMovies()
      .then((movies) => res.status(200).json(movies))
      .catch((error) => HandleError.error(error, res));
  };
}
