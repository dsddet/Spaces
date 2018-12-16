import { Component, OnInit, Input, Output } from '@angular/core';
import { ListingsService } from '../../services/get-approved-listings.service'

@Component({
  //providers: [ListingsService],
  selector: 'app-approved-listing',
  templateUrl: './approved-listing.component.html',
  styleUrls: ['./approved-listing.component.css']
})
export class ApprovedListingComponent implements OnInit{


  data: any;
  
  constructor(private listingService: ListingsService) {  }

  getUsers() {
    return this.listingService.getPendingListings()
  }

  
  ngOnInit() {
    this.data=this.getUsers();
  }


}
