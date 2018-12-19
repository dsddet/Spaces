import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ProviderService} from '../../services/provider.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/store';

@Component({
  selector: 'edit-house',
  templateUrl: 'edit-house.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EditHouseComponent implements OnInit {
  houseId:string=null;
  house:Object = {
    "_id":this.houseId,
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
  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() { }

  getHouse() {
    this.service.getListingById(this.houseId)
    .subscribe(data => {
      this.house = data;
    });
  }

  getStore(){
    this.store.select('spaces').subscribe(data => {console.log(data);})
  }

  updateHouse(data) {
    this.service.updateListing(this.houseId, data)
        .subscribe(res => {
          this.router.navigate(['/edithouse/']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
