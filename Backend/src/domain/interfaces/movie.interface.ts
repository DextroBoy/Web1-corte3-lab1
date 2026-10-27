/**
 * Película registrada en la base de datos.
 */
export interface Movie {
  id: number;
  nombre: string;

  /** Columna TEXT sin NOT NULL: puede venir nula */
  descripcion: string | null;

  fecha: Date;
  categoriaId: number;

  /** Viene del JOIN con la tabla categorias */
  categoriaNombre: string;
}
