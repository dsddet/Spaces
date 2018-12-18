import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pending-listing',
  templateUrl: './pending-listing.component.html',
  styleUrls: ['./pending-listing.component.css']
})
export class PendingListingComponent implements OnInit {
  @Input() name: any;
  constructor() { }

  ngOnInit() {
  }

}
