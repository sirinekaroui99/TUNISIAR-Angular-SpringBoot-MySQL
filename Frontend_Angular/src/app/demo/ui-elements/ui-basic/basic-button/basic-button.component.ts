import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AjoutemployeeComponent } from 'src/app/boitesDialogue/ajoutemployee/ajoutemployee.component';

@Component({
  selector: 'app-basic-button',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss'],
})
export default class BasicButtonComponent {
  public employees: Employee[];

  Tab: any[] = [
    {   nom: 'Mark', prenom: 'Otto', email: '@mdo' },
    {   nom: 'Jacob', prenom: 'Thornton', email: '@fat' },
    {   nom: 'Larry', prenom: 'the Bird', email: '@twitter' }
  ];

  constructor(private modalService: BsModalService,private employeeService: EmployeeService,private toastr: ToastrService){}

  ngOnInit() {
    this.getEmployees();
    
  }
  update(id : any){
    const initialState = {
      id: id
    };
        const modalRef = this.modalService.show(AjoutemployeeComponent, { initialState });
    modalRef.content.modalClosed.subscribe(() => {
      this.getEmployees()   ;
   // Rafraîchir les données ici
  });
  }
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
        //this.toastr.info('All Emloyees are listed!','Welcome' );
      },
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



}
