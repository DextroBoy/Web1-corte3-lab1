import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Student } from '../../interfaces/student.interface';
import { StudentsService } from '../../services/students/students.service';

@Component({
  selector: 'app-students-page',
  imports: [RouterLink, NavbarComponent],
  templateUrl: './students.page.html',
  styleUrl: './students.page.scss',
})
export class StudentsPage implements OnInit {
  private readonly studentsService = inject(StudentsService);

  students: Student[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.studentsService.getAll().subscribe({
      next: (students) => {
        this.students = students;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar los estudiantes. Verifica que el backend esté disponible.';
        this.loading = false;
      },
    });
  }
}
