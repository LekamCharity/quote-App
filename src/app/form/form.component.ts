
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quote(0, '', '', '', new Date(),0, 0);
  @Output() addquote = new EventEmitter<Quote>();

  submitQuote(){
    this.addquote.emit(this.newQuote);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
