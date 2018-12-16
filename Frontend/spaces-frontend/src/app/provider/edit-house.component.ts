import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-house',
  template: `
    <h3>Edit house details</h3>
    House Id :<input type = "text"/>
    <button>Search</button>
    `,
  styles: []
})
export class EditHouseComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
