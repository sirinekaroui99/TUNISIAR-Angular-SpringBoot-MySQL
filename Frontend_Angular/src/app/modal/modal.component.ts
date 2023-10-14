import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Pilotes } from '../pilotes';
import { EmployeeService } from '../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from '../services/flight.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PilotesService } from 'src/app/services/pilotes.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent { 
  public staffCC: Employee[]; 
  public staffPC: Pilotes[] ;  
  public id : number
  constructor(private employeeService: EmployeeService, private toastr: ToastrService, private flightService : FlightService ,private PilotesService: PilotesService ,private modalService: BsModalService){}
  ngOnInit(){ 
    this.getStaffCC(this.id) ; 
    this.getStaffPC(this.id) ;
  }
  public getStaffCC(fid :number): void { 
    console.log(fid)
    this.employeeService.findEmployeeByFid(fid).subscribe(
      (response: Employee[]) => {
        this.staffCC = response;
        console.log(this.staffCC);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } 
  public getStaffPC(fid :number): void {
    this.PilotesService.findPilotesByFid(fid).subscribe(
      (response: Pilotes[]) => {
        this.staffPC = response;
        console.log(this.staffPC);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }  
  annuler() {
    // this.bsModalRef.hide();
    // window.location.href = 'http://localhost:4200/basic/vols'; 
     this.modalService.hide() ; 
   }
 
}
