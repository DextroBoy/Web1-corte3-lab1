import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'http://localhost:3000/api/example/students';

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.endpoint);
  }
}
