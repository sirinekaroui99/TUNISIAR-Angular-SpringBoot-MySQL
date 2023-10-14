import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import {ToastrModule,ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr'; 
  import { ToastrService } from 'ngx-toastr';
import { FormControl,FormGroup,Validators } from '@angular/forms';

import { Pilotes } from '../../../../pilotes';
import { PilotesService } from '../../../../services/pilotes.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AjoutpiloteComponent } from 'src/app/boitesDialogue/ajoutpilote/ajoutpilote.component';

@Component({
  selector: 'app-basic-collapse',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-collapse.component.html',
  styleUrls: ['./basic-collapse.component.scss'],
})
export default class BasicCollapseComponent implements OnInit {
  // private props
  isCollapsed!: boolean;
  multiCollapsed1!: boolean;
  multiCollapsed2!: boolean;


  title = 'staffmanagerfront';
  public pilotes: Pilotes[];
  Tab: any[] = [
    {  name: 'Mark', email: '@mdo',jobTitle : 'jobTitle',mobile: '123' },
    {  name: 'SIRINE', email: '@mdDDDo',jobTitle : 'jobTitle222',mobile: '1566623' },
    {  name: 'TEST', email: '@TEST',jobTitle : 'job',mobile: '12663' },
  ];
 

  constructor(private modalService: BsModalService,private pilotesService: PilotesService, private toastr: ToastrService){}

  ngOnInit() {
    this.getPilotes();
    //this.toastr.success('Welcome on board, you are logged in!','success' );
  }
  update(id : any){
    const initialState = {
      id: id
    };
        const modalRef = this.modalService.show(AjoutpiloteComponent, { initialState });
    modalRef.content.modalClosed.subscribe(() => {
      this.getPilotes()   ;
   // Rafraîchir les données ici
  });
  }
  public getPilotes(): void {
    this.pilotesService.getPilotes().subscribe(
      (response: Pilotes[]) => {
        this.pilotes = response;
        console.log(this.pilotes);
        this.toastr.info('All Pilotes are listed!','Welcome' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPilotes(addForm: NgForm): void {
    //this is used to lauch the form to get the pilotes data uncomment if needed
   // document.getElementById('add-employee-form')!.click();
    this.pilotesService.addPilotes(addForm.value).subscribe(
      (response: Pilotes) => {
        console.log(response);
        this.getPilotes();
        addForm.reset();
        this.toastr.success('Pilotes was added!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
        this.toastr.error('Pilotes can not be added!','ERROR' );
      }
    );
  }

  public onUpdatePilotes(pilote: Pilotes): void {
    this.pilotesService.updatePilotes(pilote).subscribe(
      (response: Pilotes) => {
        console.log(response);
        this.getPilotes();
        this.toastr.success('Pilotes was Edited!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Pilotes can not be edited!','ERROR' );
      }
    );
  }

  public onDeletePilotes(piloteId: number): void {
    this.pilotesService.deletePilotes(piloteId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPilotes();
        this.toastr.warning('Pilotes was Deleted!','success' );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.error('Pilotes can not be deleted!','ERROR' );
      }
    );
  }


  public searchPilotes(key: string): void {
    console.log(key);
    const results: Pilotes[] = [];
    for (const pilote of this.pilotes) {
      if (pilote.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || pilote.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || pilote.mobile.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || pilote.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(pilote);
      }
    }
    this.pilotes = results;
    if (results.length === 0 || !key) {
      this.getPilotes();
    }
  }
// this code is used to lauch modals by their name uncomment if needed
  /*
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

*/

}
