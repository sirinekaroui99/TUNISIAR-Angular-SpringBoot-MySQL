import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/employee';
import { Flights } from 'src/app/flights';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-ajoutemployee',
  templateUrl: './ajoutemployee.component.html',
  styleUrls: ['./ajoutemployee.component.scss']
})
export class AjoutemployeeComponent {
  @ViewChild('addForm', { static: false }) addForm: NgForm;
  @Output() modalClosed: EventEmitter<any> = new EventEmitter();
  bsModalRef!: BsModalRef;
  nom: string;
  email: string;
  emploi: string;
  telephone: any;
  cabinCrew : any 
  id :number
  vols: any = [ { id: 1, name: 'Vol 1' },
  { id: 2, name: 'Vol 2' },
  { id: 3, name: 'Vol 3' },
  { id: 2, name: 'Vol 2' },
  { id: 3, name: 'Vol 3' },
  { id: 2, name: 'Vol 2' },
  { id: 3, name: 'Vol 3' }];
  selectedFlights : number
  public employees: Employee[];
  public flights: Flights[];
  constructor(
    private modalService: BsModalService,
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) { }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getFlights();
    console.log('id',this.id)
    //this.openModal(AjoutVolsComponent)
    if(this.id){
      this.setData();
    
    
  }
  
  
    
  }
  setData(){
    this.employeeService.findEmployeeById(this.id).subscribe((employee) => {
     this.nom = employee.name; 
     this.email= employee.email;
     this.emploi= employee.jobTitle; 
     this.telephone=employee.mobile ; 
     this.selectedFlights=employee.fid

    });
  }

  annuler() {
     this.modalService.hide();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 
  public onUpdateEmloyee(): void { 
    this.cabinCrew = { 
      id: this.id,
      name: this.nom,
      email: this.email,
      jobTitle: this.emploi,
      mobile: this.telephone,
      imageUrl : '',
      fid : this.selectedFlights
    }
    this.employeeService.updateEmployee(this.cabinCrew).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        this.toastr.success('Employee was Edited!','success' ); 
        this.modalClosed.emit() ; 
        this.modalService.hide() ; 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Employee can not be edited!','ERROR' );
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

  public onAddEmployee(addForm: NgForm): void {
    this.cabinCrew = {
      name: this.nom,
      email: this.email,
      jobTitle: this.emploi,
      mobile: this.telephone,
      imageUrl : '',
      fid : this.selectedFlights
    }

   
console.log('selectedflights', this.selectedFlights)
    console.log('addform employee', this.cabinCrew)
    //document.getElementById('add-employee-form')!.click();
    this.employeeService.addEmployee(this.cabinCrew).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees(); 
        this.modalService.hide();
        //addForm.reset();
        this.toastr.success('Employee was added!', 'Success');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        //addForm.reset();
        this.toastr.error('Employee cannot be added!', 'Error');
      }
    );
  }
}
