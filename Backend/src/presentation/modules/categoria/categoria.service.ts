import { pool } from "../../../config/database";
import { Categoria } from "../../../domain/interfaces/categoria.interface";

export class CategoriaService {

  // Lista todas las categorías registradas
  public async getAllCategorias(): Promise<Categoria[]> {
    const sql = `SELECT * FROM categorias ORDER BY id;`;
    const result = await pool.query(sql);
    return result.rows;
  }

}
