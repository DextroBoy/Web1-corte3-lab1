import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-movies',
  imports: [DatePipe, NavbarComponent, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies implements OnInit {
  private readonly movieService = inject(MovieService);

  movies: Movie[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.status
          ? `No fue posible cargar las películas (HTTP ${error.status}).`
          : 'No fue posible conectar con el backend. Verifica que esté iniciado en localhost:3000.';
        this.loading = false;
      },
    });
  }
}
