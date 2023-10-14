import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-typography',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-typography.component.html',
  styleUrls: ['./basic-typography.component.scss'],
})
export default class BasicTypographyComponent {
  Tab: any[] = [
    {   nom: 'Mark', prenom: 'Otto', email: '@mdo' },
    {   nom: 'Jacob', prenom: 'Thornton', email: '@fat' },
    {   nom: 'Larry', prenom: 'the Bird', email: '@twitter' }
  ];
  
}
