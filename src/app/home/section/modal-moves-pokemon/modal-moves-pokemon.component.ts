import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalHeaderComponent } from '../../../component/modal-header/modal-header.component';

@Component({
  selector: 'app-modal-moves-pokemon',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule, ModalHeaderComponent, NgbTooltipModule],
  templateUrl: './modal-moves-pokemon.component.html',
  styleUrls: ['./modal-moves-pokemon.component.css']
})
export class ModalMovesPokemonComponent implements OnInit {

  @Input() data : any;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  close() {
    this.activeModal.close();
  }

}
