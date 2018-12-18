import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ProviderService} from '../../services/provider.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { getInjectorIndex } from '@angular/core/src/render3/di';

@Component({
  selector: 'add-house',
  templateUrl: 'add-house.component.html'
    ,
  styles: ['#address{margin-left: 40pt ;}'],
  encapsulation: ViewEncapsulation.None
})
export class AddHouseComponent implements OnInit {
  
  house = {
    "_id":Math.random,
    "Name": "",
    "Address": {
        "Street": "",
        "City": "",
        "State": "",
        "Zip": ""
    },
    "Details": {
        "Bedrooms": "",
        "Bathrooms": "",
        "Size": "",
        "Price": "",
        "Amenities": ""
    },
    "Status": "pending",
    "Provider": "provider1@email.com",
    "DateCreated": Date.now(),
    "DateModified": Date.now(),
    "ReservedBy": null
};
  constructor(private service: ProviderService, private router:Router) { }

  ngOnInit() {
  }

  addHome() {
    this.service.addNewListing(this.house)
      .subscribe(res => {
          this.router.navigate(['/provider/addhouse']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
