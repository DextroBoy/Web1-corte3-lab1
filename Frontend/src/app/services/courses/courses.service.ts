import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'http://localhost:3000/api/example/courses';

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.endpoint);
  }
}
