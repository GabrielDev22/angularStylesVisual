import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  standalone: true,
  imports: [],
  templateUrl: './modal-header.component.html',
  styleUrl: './modal-header.component.css'
})
export class ModalHeaderComponent implements OnInit {

  @Input() title! : string;

  @Output() close = new EventEmitter<boolean>();
  @Input() popoverInfo! : string;

  ngOnInit(){
  }

  closeAction(){
    this.close.emit(true);
  }
  


}
