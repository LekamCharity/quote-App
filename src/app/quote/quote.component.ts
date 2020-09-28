import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Abubakar Nasir', 'I\'m just a good programmer with great habits..','Lekam Charity',
    new Date(),0, 0),
    new Quote(1, 'Henry Kibua', 'I\'m just a good programmer with great habits..','Dorcas Cherono',
    new Date(),0, 0),
    new Quote(1, 'Abubakar Nasir', 'I\'m just a good programmer with great habits..','Kate Wambui',
    new Date(),0, 0),
    new Quote(1, 'Abubakar Nasir', 'I\'m just a good programmer with great habits..','Ben Osongo',
    new Date(),0, 0),
  ];
  addNewQuote(quote){
    quote.author=quote.author;
    quote.quotename=quote.quotename;
    quote.user=quote.user;
    this.quotes.push(quote)
  }
  constructor() {}

  ngOnInit(): void {
  }

}
