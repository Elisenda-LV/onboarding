import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from '../../pages/main-page/main-page.component';

import { StepsService } from '../../services/steps.service';
import { Istep } from '../../interfaces/istep.interface';

@Component({
  selector: 'home-escena',
  standalone: true,
  imports: [CommonModule, MainPageComponent],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
@Input()
public stepsArray: Istep [] = [{
  title: 'elisenda',
  description: 'kkkkk',
  img:'',
  bgcolor:''
}
]


}
