import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'Save more than you spend'}, 
    {id:2, name:'Love is a choise not a feeling'}, 
    {id:3, name:'Maturity requires interdependent'},
     ];
     
  constructor() { }

  ngOnInit(): void {
  }

}
