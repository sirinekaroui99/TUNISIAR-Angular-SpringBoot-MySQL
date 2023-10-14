import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent {

}
