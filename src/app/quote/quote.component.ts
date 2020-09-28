import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  isComplete =true;
  quotes: Quote[] = [
    new Quote(1, 'John Paker', 'To bring up a child in the way he should go, travel that way yourself once in a while.','Lekam Charity',
    new Date()),
    new Quote(1, 'Henry Kibua', 'May we all become teachers of peace, and teach in the only way possible: by example','Dorcas Cherono',
    new Date()),
    new Quote(1, 'Karley Charlie', 'Draw inspiration from other peoples lives The inspiring example of the people you admire is a great place to start with','Kate Wambui',
    new Date()),
    new Quote(1, 'Moreno Quincy', 'Straight talk is a good example to set, and if there are real reasons behind your decisions, its actually helpful to share them with your child.','Ben Osongo',
    new Date()),
  ];
  addNewQuote(quote){
    quote.author=quote.author;
    quote.quotename=quote.quotename;
    quote.user=quote.user;
    this.quotes.push(quote)
  }
  
  upVote(index) {
    this.quotes[index].upvote++;
  }
  downVote(index) {
    this.quotes[index].downvote++;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quotename}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  bestQuote(){

    
  }
  constructor() {}

  ngOnInit(){
  }

}
