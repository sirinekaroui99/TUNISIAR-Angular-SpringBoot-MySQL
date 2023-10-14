import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import BasicBadgeComponent from 'src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component';
import { Flights } from 'src/app/flights';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-ajout-vols',
  templateUrl: './ajout-vols.component.html',
  styleUrls: ['./ajout-vols.component.scss']
})
export class AjoutVolsComponent {
  @ViewChild('addForm', { static: false }) addForm: NgForm;
  @Output() modalClosed: EventEmitter<any> = new EventEmitter();
  bsModalRef!: BsModalRef;
  flight : Flights
  depart: string;
  destination: string;
  heureDepart: string;
  type: string;
  vol : any 
  id:any
  public flights: Flights[];
  constructor(
    private modalService: BsModalService,
    private flightService: FlightService,
    private toastr: ToastrService 
  
  ) { }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }

 
  annuler() {
   // this.bsModalRef.hide();
   // window.location.href = 'http://localhost:4200/basic/vols'; 
    this.modalService.hide() ; 
  }

  ngOnInit(){
    console.log('id',this.id)
    //this.openModal(AjoutVolsComponent)
    if(this.id){
      this.setData();
    }
    
  }
  setData(){
    this.flightService.findFlightById(this.id).subscribe((flight) => {
      this.depart = flight.depart;
      this.destination = flight.destination;
      this.heureDepart = flight.hour;
      this.type = flight.type;
    });
  }
  public updateFlight(flight : Flights) : void{ 
    this.vol = {
      id : this.id,
      depart : this.depart,
      destination : this.destination,
      hour : this.heureDepart,
      type : this.type,
      flightCode : ''
    }
    this.flightService.updateFlight(this.vol).subscribe(
      (response: Flights) => {
        console.log(response);
        this.getFlights();   
        this.modalClosed.emit() ; 
        this.modalService.hide() ; 
    
       
        this.toastr.success('Flight was Edited!','success' ); 

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Flight can not be edited!','ERROR' );
      }
    );
    
  }
  public onAddFlight(addForm: NgForm): void {
    this.vol = {
      depart : this.depart,
      destination : this.destination,
      hour : this.heureDepart,
      type : this.type,
      flightCode : ''
    }
    
    //document.getElementById('add-flight-form')!.click();
    console.log('add form',this.vol)
    this.flightService.addFlight(this.vol).subscribe(
      (response: Flights) => {
        console.log(response);
       
        this.bsModalRef = this.modalService.show(BasicBadgeComponent);
        this.modalService.hide(); 
        //addForm.reset();
        this.toastr.success('Flight was added!', 'Success');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        //addForm.reset();
        this.toastr.error('Flight cannot be added!', 'Error');
      }
    );
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
}
