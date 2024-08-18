import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent implements OnInit {

  constructor(
  ){}

  ngOnInit(): void {
  }

  openModal(){
    
  }

}
