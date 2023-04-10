import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeRepository } from '../model/employee.repository';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'selector-name',
  templateUrl: './employeeInsert.component.html',
})
export class EmployeeInsertComponent {
  employee: Employee = new Employee();
  constructor(private repository: EmployeeRepository, private router: Router) {}

  insert(form: NgForm) {
    console.log(this.employee);
    this.repository.insertEmployee(this.employee);
    this.router.navigateByUrl('/insert-employee');
  }
}
