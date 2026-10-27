import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-courses-page',
  imports: [RouterLink, NavbarComponent],
  templateUrl: './courses.page.html',
  styleUrl: './courses.page.scss',
})
export class CoursesPage implements OnInit {
  private readonly coursesService = inject(CoursesService);

  courses: Course[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.coursesService.getAll().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar los cursos. Verifica que el backend esté disponible.';
        this.loading = false;
      },
    });
  }
}
