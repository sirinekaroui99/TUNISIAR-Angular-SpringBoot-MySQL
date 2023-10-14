import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Flights } from 'src/app/flights';
import { Pilotes } from 'src/app/pilotes';
import { EmployeeService } from 'src/app/services/employee.service';
import { PilotesService } from 'src/app/services/pilotes.service'; 
@Component({
  selector: 'app-ajoutpilote',
  templateUrl: './ajoutpilote.component.html',
  styleUrls: ['./ajoutpilote.component.scss']
})
export class AjoutpiloteComponent {
  @Output() modalClosed: EventEmitter<any> = new EventEmitter();
  bsModalRef!: BsModalRef;
  nom: string;
   email: string;
   emploi: string;
   telephone: string;
   id: number ; 
   //vols : any
   // Dans votre composant TypeScript
  vols: string[] = ["Vol 1", "Vol 2", "Vol 3"];
  public pilotes: Pilotes[];
   pilote: any;
   selectedFlights : number
   public flights: Flights[]; 
   constructor(private employeeService: EmployeeService,private modalService: BsModalService,private pilotesService : PilotesService,private toastr : ToastrService) { }
   @ViewChild('modal') modal: any;
   openModal(template: TemplateRef<any>) {
     this.bsModalRef = this.modalService.show(template);
   }
   ngOnInit() { 
    this.getFlights();  console.log('id',this.id)
    //this.openModal(AjoutVolsComponent)
    if(this.id){
      this.setData();
    }
  } 
  setData(){
    this.pilotesService.findPilotesById(this.id).subscribe((employee) => {
     this.nom = employee.name; 
     this.email= employee.email;
     this.emploi= employee.jobTitle; 
     this.telephone=employee.mobile ; 
     this.selectedFlights=employee.fid

    });
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
   ajouterVol() {
     // Logique pour ajouter le vol
     console.log('Vol ajouté !');
     console.log('nom:', this.nom);
     console.log('email:', this.email);
     console.log('emploi:', this.emploi);
     console.log('telephone:', this.telephone);
   }
   annuler() {
     
     this.modalService.hide();
   }

   public onAddPilotes(): void {
    this.pilote = {
      name: this.nom,
      email: this.email,
      jobTitle: this.emploi,
      mobile: this.telephone,
      imageUrl : '',
      fid : this.selectedFlights
    };
    console.log('addform pilote',this.pilote)
    //this is used to lauch the form to get the pilotes data uncomment if needed
   // document.getElementById('add-employee-form')!.click();
    this.pilotesService.addPilotes(this.pilote).subscribe(
      (response: Pilotes) => {
        console.log(response); 
        this.modalService.hide();
        //this.getPilotes();
       
        this.toastr.success('Pilotes was added!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Pilotes can not be added!','ERROR' );
      }
    );
  } 
  public onUpdatePilotes(): void { 
    this.pilote = { 
      id:this.id,
      name: this.nom,
      email: this.email,
      jobTitle: this.emploi,
      mobile: this.telephone,
      imageUrl : '',
      fid : this.selectedFlights
    };
    this.pilotesService.updatePilotes(this.pilote).subscribe(
      (response: Pilotes) => {
        console.log(response); 
        this.modalClosed.emit() ; 
        this.modalService.hide() ; 
       // this.getPilotes();
        this.toastr.success('Pilotes was Edited!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Pilotes can not be edited!','ERROR' );
      }
    );
  }
}
