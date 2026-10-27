import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';
import { Movie } from '../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'http://localhost:3000/api/catalog';

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.endpoint}/movies`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.endpoint}/categories`);
  }
}
