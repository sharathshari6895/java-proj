import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../model/employee.repository';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'edit',
  templateUrl: './editEmployee.component.html',
})
export class EditEmployeeComponent {
  employee: Employee = new Employee();
  constructor(
    private edit: EmployeeRepository,
    private router: Router,
    private activaterouter: ActivatedRoute
  ) {
    Object.assign(
      this.employee,
      edit.getEmployeeUpdate(activaterouter.snapshot.params['id'])
    );
  }
  editInsert(form: NgForm) {
    this.edit.editEmployee(this.employee);
    this.router.navigateByUrl('/insert-employee');
  }
}
