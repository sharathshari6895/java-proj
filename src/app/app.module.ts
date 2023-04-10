import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from 'src/app/employee/employee.module';
import { EmployeeInsertComponent } from './employee/employeeInsert.component';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './employee/editEmployee.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    EmployeeModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'selector-name',
        component: EmployeeInsertComponent,
      },
      {
        path: 'insert-employee',
        component: EmployeeComponent,
      },
      {
        path: 'edit/:id',
        component: EditEmployeeComponent,
      },
      { path: '**', redirectTo: '/insert-employee' },
    ]),
  ],
})
export class AppModule {}
