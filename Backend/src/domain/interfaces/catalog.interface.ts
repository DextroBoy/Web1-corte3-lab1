export interface Category {
  id: number;
  nombre: string;
}

export interface Movie {
  id: number;
  nombre: string;
  descripcion: string | null;
  fecha: string;
  categoria_id: number;
  categoria_nombre: string;
}
