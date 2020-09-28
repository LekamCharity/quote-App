import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'John Paker', 'Never give up.','Lekam Charity',
    new Date()),
    new Quote(1, 'Henry Kibua', 'Better late than never','Dorcas Cherono',
    new Date()),
    new Quote(1, 'Karley Charlie', 'The early bad catches the early worm.','Kate Wambui',
    new Date()),
    new Quote(1, 'Moreno Quincy', 'Save more than you spend.','Ben Osongo',
    new Date()),
  ];
  addNewQuote(quote){
    quote.author=quote.author;
    quote.quotename=quote.quotename;
    quote.user=quote.user;
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  upVote(index) {
    this.quotes[index].upvote++;
  }
  downVote(index) {
    this.quotes[index].downvote++;
  }
  constructor() {}

  ngOnInit(){
  }

}
