import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { CategoriaService } from "./categoria.service";

export class CategoriaController {

  private readonly categoriaService = new CategoriaService();

  getAllCategorias = (req: Request, res: Response): void => {
    this.categoriaService.getAllCategorias()
    .then((categorias) => res.status(200).json(categorias))
    .catch((error) => HandleError.error(error, res));
  };

}
