import { Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Movie } from '../../interfaces/movie.interface';
import { CatalogService } from '../../services/catalog/catalog.service';

@Component({
  selector: 'app-catalog-page',
  imports: [NavbarComponent, RouterLink, DatePipe],
  templateUrl: './catalog.page.html',
  styleUrl: './catalog.page.scss',
})
export class CatalogPage implements OnInit {
  private readonly catalogService = inject(CatalogService);

  movies: Movie[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.catalogService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar el catálogo. Verifica que el backend esté disponible.';
        this.loading = false;
      },
    });
  }
}
