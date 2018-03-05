import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> Welcome, {{name}}!</h2>
  <button (click) = "onClick($event)">Greet</button>
  {{greeting}}
  <button (click) = "greeting = 'Hey, Matie Tiger!'">Hello?</button>
  `,
  styles: [`
   
  
  `]
})
export class TestComponent implements OnInit {
  public name = "Matie";
  
  public greeting = "";
 

  constructor() { }

  ngOnInit() {
  }
  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event);
    console.log("Hello, " + this.name + " "+ event.type);
    this.greeting = "Welcome to my coding world!"
  }
}


