import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent implements OnInit {

  closeResult = '';

  constructor(
    private modalService : NgbModal,
  ){}

  ngOnInit(): void {
  }

  openModal(content: any){
    const modalRef = this.modalService.open(content);
  }

	open(content: TemplateRef<any>) {
		this.modalService.open(content).result.then();
	}

  openModalVertical(modalVerticalPantalla : TemplateRef<any>){
    this.modalService.open(modalVerticalPantalla);
  }

  close(){
    this.modalService.dismissAll();
  }

  send(){

  }

}
