import { StepsService } from './../../services/steps.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenaComponent } from '../../components/escena/escena.component';
import { Istep } from '../../interfaces/istep.interface';

@Component({
  selector: 'home-main-page',
  standalone: true,
  imports: [
    CommonModule,
    EscenaComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})


export class MainPageComponent {

  public stepsArray : Istep [] = [];

  constructor(public stepsService: StepsService ){}

}
