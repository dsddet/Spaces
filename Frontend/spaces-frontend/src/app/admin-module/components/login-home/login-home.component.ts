import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/get-approved-listings.service'

@Component({
  providers: [ListingsService],
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css'],
  
})
export class LoginHomeComponent implements OnInit {


  data: any;

  constructor(private listingService: ListingsService) { }

  getUsers() {
    return this.listingService.getPendingListings()
  }


  ngOnInit() {
    this.data = this.getUsers();
  }


}