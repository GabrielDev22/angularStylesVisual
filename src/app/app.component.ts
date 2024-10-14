import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  showDropDown : boolean = false;

  constructor(
    private router : Router
  ){}

  ngOnInit(): void {
  }

  categoriesNavigate(route: string){
    switch(route){
      case 'home':
        this.router.navigate(['']);
        break;
      case 'slider':
        this.router.navigate(['/slider']);
        break;
      case 'formulario-modal':
        this.router.navigate(['formulario/modal']);
        break;
      case 'card-3D':
        this.router.navigate(['/card/3d']);
        break;    
      case 'card-visual-3d':
        this.router.navigate(['card/visual/3d']);
        break; 
      case 'section':
        this.router.navigate(['section']);
        break;   
    }
  }
  
  
}
