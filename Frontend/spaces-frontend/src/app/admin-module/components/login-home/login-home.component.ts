import { Component, OnInit,Output } from '@angular/core';
import { ListingsService } from '../../services/get-approved-listings.service'

@Component({
 // providers: [ListingsService],
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  //<p class="listing" *ngFor="let listing of data">{{listing["Name"]}}</p>
  //template:`<button (click)="printData()">Results</button> `,
  styleUrls: ['./login-home.component.css'],
  
})
export class LoginHomeComponent implements OnInit {
  data: any;

  constructor(private listingService: ListingsService) { }

  getUsers() {

  }

  ngOnInit() {
    this.data = this.getUsers();
  }

  printData() {
    this.listingService.getListings("approved").subscribe(x => console.log(x));
  }

  


}