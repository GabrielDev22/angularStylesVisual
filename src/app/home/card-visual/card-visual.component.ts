import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-visual.component.html',
  styleUrl: './card-visual.component.css'
})
export class CardVisualComponent implements OnInit {

  data: any = [
    {
      id: "1",
      name: "Slider",
      description: "En esta seccion de aqui se trabaja en profundidad la creacion de un slider con boostrap al igual que hacerlo completamente responsivo a medida que las pantallas se ponen mas pequeñas",
      url: "assets/images/programacion.jpg",
    },
    {
      id: "1",
      name: "Slider",
      description: "En esta seccion de aqui se trabaja en profundidad la creacion de un slider con boostrap al igual que hacerlo completamente responsivo a medida que las pantallas se ponen mas pequeñas",
      url: "assets/images/programacion.jpg",
    },
    {
      id: "1",
      name: "Slider",
      description: "En esta seccion de aqui se trabaja en profundidad la creacion de un slider con boostrap al igual que hacerlo completamente responsivo a medida que las pantallas se ponen mas pequeñas",
      url: "assets/images/programacion.jpg",
    },
    {
      id: "1",
      name: "Slider",
      description: "En esta seccion de aqui se trabaja en profundidad la creacion de un slider con boostrap al igual que hacerlo completamente responsivo a medida que las pantallas se ponen mas pequeñas",
      url: "assets/images/programacion.jpg",
    },
    {
      id: "1",
      name: "Slider",
      description: "En esta seccion de aqui se trabaja en profundidad la creacion de un slider con boostrap al igual que hacerlo completamente responsivo a medida que las pantallas se ponen mas pequeñas",
      url: "assets/images/programacion.jpg",
    },
    {
      id: "1",
      name: "Slider",
      description: "En esta seccion de aqui se trabaja en profundidad la creacion de un slider con boostrap al igual que hacerlo completamente responsivo a medida que las pantallas se ponen mas pequeñas",
      url: "assets/images/programacion.jpg",
    },
    {
      id: "1",
      name: "Slider",
      description: "En esta seccion de aqui se trabaja en profundidad la creacion de un slider con boostrap al igual que hacerlo completamente responsivo a medida que las pantallas se ponen mas pequeñas",
      url: "assets/images/programacion.jpg",
    }
  ];

  constructor(){}

  ngOnInit(): void {

  }



}
