import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ProviderService} from '../../services/provider.service';

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
  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.getHouse(this._id);
  }

  getHouse() {
    this.service.getListingById(this.houseId)
    .subscribe(data => {
      this.house = data;
    });
  }

  updateHouse(data) {
    this.service.updateListing(this.houseId, data)
        .subscribe(res => {
          //let id = res['_id'];
          this.router.navigate(['/provider/edithouse']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
