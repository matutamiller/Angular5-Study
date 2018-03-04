import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> Welcome, {{name}}!</h2>
  <input [id]="myId" type="text" value="Matie">
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Matie">
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Matie";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = false; 
  constructor() { }

  ngOnInit() {
  }
  greetUser() {
    return "Hello " + this.name;
  }
}


