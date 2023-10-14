import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { environment } from "../../environments/environment";
import { Flights } from "../flights";

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/cabincrew/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/cabincrew/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/cabincrew/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/cabincrew/delete/${employeeId}`);
  }
  public findEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/cabincrew/find/${employeeId}`);
  } 
  
  public getFlights(): Observable<Flights[]> {
    return this.http.get<Flights[]>(`${this.apiServerUrl}/flights/all`);
  } 
  public findEmployeeByFid(fid: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/cabincrew/look/${fid}`);
  }
}