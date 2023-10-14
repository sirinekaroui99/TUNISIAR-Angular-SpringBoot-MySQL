
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import {ToastrModule,ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr'; 
  import { ToastrService } from 'ngx-toastr';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { FlightService } from '../../../../services/flight.service';
import { Flights } from '../../../../flights';
import { Employee } from '../../../../employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { PilotesService } from 'src/app/services/pilotes.service';
import { Pilotes } from 'src/app/pilotes';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { AjoutVolsComponent } from 'src/app/boitesDialogue/ajout-vols/ajout-vols.component';
import { ModalComponent } from 'src/app/modal/modal.component';


@Component({
  selector: 'app-basic-badge',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-badge.component.html',
  styleUrls: ['./basic-badge.component.scss'],
})
export default class BasicBadgeComponent {
  Tab: any[] = [
    {   nom: 'Mark', prenom: 'Otto', email: '@mdo' },
    {   nom: 'Jacob', prenom: 'Thornton', email: '@fat' },
    {   nom: 'Larry', prenom: 'the Bird', email: '@twitter' }
  ];

  title = 'staffmanagerfront';
  public employees: Employee[];
  public flights: Flights[];
  public employee1: Employee;
  public editEmployee: Employee;
  public deleteEmployee: Employee;
  public findEmployeeById: Employee; 
  public staffCC: Employee[]; 
  public staffPC: Pilotes[] ; 
  bsModalRef: BsModalRef;

  constructor(private employeeService: EmployeeService, private toastr: ToastrService, private flightService : FlightService ,private PilotesService: PilotesService ,private modalService: BsModalService){}

  ngOnInit() {
    this.getFlights();
    //this.toastr.success('Welcome on board, you are logged in!','success' );
  }
  update(id : any){
    const initialState = {
      id: id
    };
        const modalRef = this.modalService.show(AjoutVolsComponent, { initialState });
    modalRef.content.modalClosed.subscribe(() => {
      this.getFlights()   ;
   // Rafraîchir les données ici
  });
  }
 
  public getFlights(): void {
    this.flightService.getFlights().subscribe(
      (response: Flights[]) => {
        this.flights = response;
        console.log(this.flights);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } 
 


  public deleteFlight(fid : any) : void{
    this.flightService.deleteFlight(fid).subscribe(
      (response: void) => {
        console.log(response);
        this.getFlights();
        this.toastr.warning('Flight was Deleted!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Flight can not be deleted!','ERROR' );
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

view(id :number){ 
  const initialState = {
    id: id
  };
  this.bsModalRef = this.modalService.show(ModalComponent, { initialState });
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
