import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private employees: Employee[] = [
    new Employee(1, 'chandu', 32),
    new Employee(2, 'Karthik', 23),
    new Employee(3, 'sharath', 43),
    new Employee(4, 'gunesh', 54),
    new Employee(5, 'mukesh', 43),
  ];
  getEmployees(): Observable<Employee[]> {
    return from([this.employees]);
  }
}
