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

public currentStep : number = 0;

lastStep(){
  if (this.currentStep > 0) {
    this.currentStep--;
  } else {
    this.currentStep = this.stepsArray.length - 1;
  }
  console.log(this.currentStep);
}

nextStep() {
  if(this.currentStep < this.stepsArray.length -1){
    this.currentStep ++;
  }else{
    this.currentStep = 0
  }

  console.log(this.currentStep)
}

activeStep(){
  this.currentStep = this.stepsArray.length
}

}
