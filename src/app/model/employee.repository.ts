import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.employeedetails';
import { Employee } from './employee.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class EmployeeRepository {
  private employees: Employee[] = []; //arrayof 15 objects  //data aware state

  constructor(private dataSource: RestDataSource) {
    dataSource.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  // insertEmployee(employee: Employee) {
  //   this.dataSource.insertEmployeeDetails(employee).subscribe((p) => {
  //     this.employees.push(p);
  //     console.log(this.employees[0]);
  //   });
  // }

  getEmployeeUpdate(id: number): Employee | undefined {
    return this.employees.find((p) => p.employeeId == id);
  }

  insertEmployee(employee: Employee) {
    console.log(employee);
    this.dataSource
      .insertEmployeeDetails(employee)
      .subscribe((p) => this.employees.push(p));
  }

  editEmployee(employee: Employee) {
    this.dataSource.editEmployeeDetails(employee).subscribe((p) => {
      this.employees.splice(
        this.employees.findIndex((p) => p.employeeId == employee.employeeId),
        1,
        employee
      );
    });
  }

  deleteEmployee(id: any) {
    this.dataSource.deleteEmployee(id).subscribe((p) => {
      this.employees.splice(
        this.employees.findIndex((p) => p.employeeId == id),
        1
      );
    });
  }
}
