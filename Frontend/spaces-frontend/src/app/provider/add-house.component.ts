import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-house',
  templateUrl: 'add-house.component.html'
    ,
  styles: ['#address{margin-left: 40pt ;}'],
  encapsulation: ViewEncapsulation.None
})
export class AddHouseComponent implements OnInit {
  house = {};
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  addHome() {
    this.http.post('http://localhost:4201/provider/listings', this.house)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/provider/addhouse', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
