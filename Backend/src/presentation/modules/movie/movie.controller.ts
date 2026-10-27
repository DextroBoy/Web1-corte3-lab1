import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { MovieService } from "./movie.service";

export class MovieController {

  private readonly movieService = new MovieService();

  getAllMovies = (req: Request, res: Response): void => {
    this.movieService.getAllMovies()
    .then((movies) => res.status(200).json(movies))
    .catch((error) => HandleError.error(error, res));
  };

}
