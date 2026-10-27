import { pool } from "../../../config/database";
import { Movie } from "../../../domain/interfaces/movie.interface";

export class MovieService {

  // Lista las películas junto con el nombre de su categoría
  public async getAllMovies(): Promise<Movie[]> {
    const sql = `SELECT m.id, m.nombre, m.descripcion, m.fecha,
           m.categoria_id AS "categoriaId", c.nombre AS "categoriaNombre"
    FROM movies m
    JOIN categorias c ON c.id = m.categoria_id
    ORDER BY m.id;`;
    const result = await pool.query(sql);
    return result.rows;
  }

}
