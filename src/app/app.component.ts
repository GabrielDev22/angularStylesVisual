import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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
      case 'slider':
        this.router.navigate(['/slider']);
        break;
    }
  }
  
  
}
