import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Category } from '../../interfaces/category.interface';
import { CatalogService } from '../../services/catalog/catalog.service';

@Component({
  selector: 'app-categories-page',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './categories.page.html',
  styleUrl: './categories.page.scss',
})
export class CategoriesPage implements OnInit {
  private readonly catalogService = inject(CatalogService);

  categories: Category[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.catalogService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar las categorías. Verifica que el backend esté disponible.';
        this.loading = false;
      },
    });
  }
}
