import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();
  quotes: Quote[] = [
    new Quote(1, 'John Paker', 'Never give up.','Lekam Charity',
    new Date(),0, 0),
    new Quote(1, 'Henry Kibua', 'Better late than never','Dorcas Cherono',
    new Date(),0, 0),
    new Quote(1, 'Karley Charlie', 'The early bad catches the early worm.','Kate Wambui',
    new Date(),0, 0),
    new Quote(1, 'Moreno Quincy', 'Save more than you spend.','Ben Osongo',
    new Date(),0, 0),
  ];
  
  uvotes = 0;
  dvotes = 0;

  upVote(){
    this.uvotes = this.uvotes + 1;
  }

  downVote(){
    this.dvotes = this.dvotes + 1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
