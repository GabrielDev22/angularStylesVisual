import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  closeResult = '';
  modalVerticalPantalla : boolean = false

  constructor(
    private modalService : NgbModal,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.form = this.fb.group({
      fullName: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      documentNumber: [null, Validators.compose([Validators.required])],
      dateOfBirth: [null, Validators.compose([Validators.required])],
      context: [null, Validators.compose([Validators.required])]
    })                                                                       
  }

  openModal(content: any){
    const modalRef = this.modalService.open(content);
  }

	open(content: TemplateRef<any>) {
		this.modalService.open(content).result.then();
	}

  openModalVertical(){
    this.modalVerticalPantalla = true;
  }

  closeModalVertical(){
    this.modalVerticalPantalla = false;
  }

  close(){
    this.modalService.dismissAll();
  }

  send(){

  }

}
