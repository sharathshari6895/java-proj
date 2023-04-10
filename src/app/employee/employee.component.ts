import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from './../model/employee.repository';
import { Router } from '@angular/router';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'insert-employee',
  templateUrl: './enployee.component.html',
})
export class EmployeeComponent {
  constructor(
    private repository: EmployeeRepository,
    private datasourse: RestDataSource,
    private router: Router
  ) {}

  get employees(): Employee[] {
    return this.repository.getEmployees();
  }
  deleteEmployee(id: number) {
    return this.repository.deleteEmployee(id);
  }

  addEmployee() {
    // this.addLine(employees);
    this.router.navigateByUrl('/selector-name');
  }
}
