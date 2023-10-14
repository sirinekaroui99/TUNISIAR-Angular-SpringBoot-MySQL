import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-tabs-pills',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-tabs-pills.component.html',
  styleUrls: ['./basic-tabs-pills.component.scss'],
})
export default class BasicTabsPillsComponent {
  Tab: any[] = [
    {   nom: 'Mark', prenom: 'Otto', email: '@mdo' },
    {   nom: 'Jacob', prenom: 'Thornton', email: '@fat' },
    {   nom: 'Larry', prenom: 'the Bird', email: '@twitter' }
  ];
  
}
