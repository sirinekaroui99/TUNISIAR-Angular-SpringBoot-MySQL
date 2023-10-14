
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../../employee';
import { EmployeeService } from '../../../../services/employee.service';
import {ToastrModule,ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr'; 
  import { ToastrService } from 'ngx-toastr';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Flights } from '../../../../flights';

@Component({
  selector: 'app-tbl-bootstrap',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './tbl-bootstrap.component.html',
  styleUrls: ['./tbl-bootstrap.component.scss'],
})
export default class TblBootstrapComponent {
  title = 'staffmanagerfront';
  public employees: Employee[];
  public flights: Flights[];
  public employee1: Employee;
  public editEmployee: Employee;
  public deleteEmployee: Employee;
  public findEmployeeById: Employee;

  constructor(private employeeService: EmployeeService, private toastr: ToastrService){}

  ngOnInit() {
    this.getEmployees();
    this.toastr.success('Welcome on board, you are logged in!','success' );
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
        this.toastr.info('All Emloyees are listed!','Welcome' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getFlights(): void {
    this.employeeService.getFlights().subscribe(
      (response: Flights[]) => {
        this.flights = response;
        console.log(this.flights);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form')!.click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
        this.toastr.success('Employee was added!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
        this.toastr.error('Employee can not be added!','ERROR' );
      }
    );
  }

  public onUpdateEmloyee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        this.toastr.success('Employee was Edited!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Employee can not be edited!','ERROR' );
      }
    );
  }

  public onDeleteEmloyee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
        this.toastr.warning('Employee was Deleted!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Employee can not be deleted!','ERROR' );
      }
    );
  }

  public onInfoEmloyee(employeeId: number): void {
    this.employeeService.findEmployeeById(employeeId).subscribe(data => {
      console.log(data);
      this.employee1 = data;},
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }


  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.mobile.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container')!;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    if (mode === 'info') {
      this.findEmployeeById = employee;
      button.setAttribute('data-target', '#infoEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }



}
