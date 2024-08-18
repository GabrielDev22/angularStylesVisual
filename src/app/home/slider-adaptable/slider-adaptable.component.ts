import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider-adaptable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-adaptable.component.html',
  styleUrl: './slider-adaptable.component.css'
})

export class SliderAdaptableComponent implements OnInit {

  activeSlide = 0;
  slides = [0,1,2];

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ){}

  ngOnInit(): void {
    const carouselElement = this.el.nativeElement.querySelector('#carouselExample')
    this.render.listen(carouselElement, 'slide.bs.carousel', (event: any) => {
      this.activeSlide = event.to;
    })
  }

}
