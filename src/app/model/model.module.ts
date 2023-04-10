import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.employeedetails';
import { RestDataSource } from './rest.datasource';
import { EmployeeRepository } from './employee.repository';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [StaticDataSource, RestDataSource, EmployeeRepository],
})
export class ModelModule {}
