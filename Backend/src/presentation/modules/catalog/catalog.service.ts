import { pool } from "../../../config/database";
import { Category, Movie } from "../../../domain/interfaces/catalog.interface";

export class CatalogService {
  public async getCategories(): Promise<Category[]> {
    const result = await pool.query<Category>(
      "SELECT id, nombre FROM categorias ORDER BY nombre;"
    );
    return result.rows;
  }

  public async getMovies(): Promise<Movie[]> {
    const result = await pool.query<Movie>(
      `SELECT m.id, m.nombre, m.descripcion, m.fecha, m.categoria_id,
        c.nombre AS categoria_nombre
       FROM movies m
       INNER JOIN categorias c ON c.id = m.categoria_id
       ORDER BY m.fecha DESC, m.nombre;`
    );
    return result.rows;
  }
}
