import { Component, Input, Query } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from '../../pages/main-page/main-page.component';

import { Istep } from '../../interfaces/istep.interface';
import { animate, group, query, style, transition, trigger } from '@angular/animations';


/* const left = [
  query(':enter, :leave', style({position: 'fixed', widht:'100%'}), {
    optional: true }),

  group([
    query('enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))],{
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
    optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform:'translateX(0%)' }))], {
      optional: true,
    }),
    query('.leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
]; */

@Component({
  selector: 'home-escena',
  standalone: true,
  imports: [
    CommonModule,
    MainPageComponent,

  ],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css',
  /* animations: [
    trigger('animStep', [
      transition(':increment', right),
      transition(':decrement', left),
    ])
  ] */

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
