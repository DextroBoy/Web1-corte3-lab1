export interface Category {
  id: number;
  nombre: string;
}

export interface Movie {
  id: number;
  nombre: string;
  descripcion: string | null;
  fecha: string;
  categoriaId: number;
  categoriaNombre: string;
}
