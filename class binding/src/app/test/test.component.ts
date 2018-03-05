import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> Welcome, {{name}}!</h2>
  <h2 class="text-success">Hello, Matie</h2>
  <h2 [class]="successClass">Hello, Matie</h2>
  <h2 lass="text-special" [class]="successClass">Hello, Matie</h2>
  <h2 [class.text-danger]="hasError">Hello, Matie</h2>
  <h2 [ngClass]="messageClasses">Hello, Matie</h2>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  
  `]
})
export class TestComponent implements OnInit {
  public name = "Matie";
  
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }
  greetUser() {
    return "Hello " + this.name;
  }
}


