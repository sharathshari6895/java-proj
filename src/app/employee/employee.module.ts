import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeInsertComponent } from './employeeInsert.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './editEmployee.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule], //to utilise the services of browsermodule
  declarations: [
    EmployeeComponent,
    EmployeeInsertComponent,
    EditEmployeeComponent,
  ], //register and launch
  exports: [EmployeeComponent, EmployeeInsertComponent, EditEmployeeComponent], //sharing components across modules
})
export class EmployeeModule {
  constructor() {}
}
