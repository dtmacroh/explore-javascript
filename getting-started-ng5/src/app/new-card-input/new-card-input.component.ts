import { Component, EventEmitter, OnInit,Output,HostListener,ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators,NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.sass'],
  host:{'class':'col-4'}
})
export class NewCardInputComponent implements OnInit {
  public newCard: any = {text: ''};
  newCardForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }
  @Output() onCardAdd = new EventEmitter<string>();
  @ViewChild('form') public form: NgForm;
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Enter" && this.form.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }
  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCardForm.controls['text'].setValue('');
  }
  ngOnInit() {
  }

}
