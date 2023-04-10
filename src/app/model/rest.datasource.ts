import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
//import { Cart } from './cart.model';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  [x: string]: any;
  saveOrder(order: Employee): Observable<Employee> {
    throw new Error('Method not implemented.');
  }
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `http://localhost:8085/`;
  }

  getEmployees(): Observable<Employee[]> {
    //publish
    return this.http.get<Employee[]>(this.baseUrl + 'displayEmployee'); //state change
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}deleteEmployee/${id}`);
  }

  insertEmployeeDetails(employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.post<Employee>(this.baseUrl + 'saveEmployee', employee);
  }

  editEmployeeDetails(employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.put<Employee>(this.baseUrl + 'updateEmployee', employee);
  }
}
