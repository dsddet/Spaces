import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listing',
  template: `
    <div class= "col-sm-4" >
        <div class="panel panel-primary">
            <div class="panel-heading"> 
                BLACK FRIDAY DEAL
            </div >
            
            <div > 
                <span>Price: 100</span>
                <button type="button" class="btn btn-success">Reserve</button>
            </div>
            
        </div>
    </div>
    `
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
