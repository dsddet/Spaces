import { Component, OnInit, Input } from '@angular/core';
import { isPlatformWorkerApp } from '@angular/common';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  @Input() name: any;


  listing: Object;

  constructor() {
    this.listing = { listingId: 1, name: "Utopia Park", price: 1000, state: "Iowa", city: "Fairfield", bedrooms: 2, bathrooms: 2 };
  }

  ngOnInit() {
  }

}
