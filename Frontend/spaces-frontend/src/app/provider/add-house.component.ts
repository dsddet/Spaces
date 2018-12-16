import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-house',
  template: `
    <h3>Add house details</h3>
    Type :<input type = "text"/>
    <br/>Price :<input type = "text"/>
    <br/>Location :<input type = "text"/>
    `,
  styles: []
})
export class AddHouseComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
