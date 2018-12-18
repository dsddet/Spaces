import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'edit-house',
  templateUrl: 'edit-house.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EditHouseComponent implements OnInit {
  _id = 1;
  house:Object = {
    "_id":this._id,
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
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHouse(this._id);
  }

  getHouse(id) {
    this.http.get('http://localhost:4201/provider/listing/'+id).subscribe(data => {
      this.house = data;
    });
  }

  updateHouse(data) {
    this.http.put('http://localhost:4201/provider/patch/'+this._id, data)
      .subscribe(res => {
          //let id = res['_id'];
          this.router.navigate(['/provider/edithouse/',this._id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
