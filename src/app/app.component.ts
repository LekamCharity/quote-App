import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quotes:Quote[] = [
{id:1, name:'Save more than you spend'}, 
{id:2, name:'Love is a choise not a feeling'}, 
{id:3, name:'Maturity requires interdependent'},
 ];
}
