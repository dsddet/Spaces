import { Component, OnInit, Output, Input } from '@angular/core';
import { ListingsService } from '../../services/get-approved-listings.service'
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/store';
import {filter} from 'rxjs/operators'


@Component({
  // providers: [ListingsService],
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  //<p class="listing" *ngFor="let listing of data">{{listing["Name"]}}</p>
  // template: `
  

  // <div *ngFor="let listing of data">
   
  // <span *ngIf="listing.Status==='approved'">{{listing.Status}}
  // <app-listing-detail [name]=listing.Price></app-listing-detail>
  // </span>
   
  //  </div>


  // `,
  styleUrls: ['./login-home.component.css'],

})
export class LoginHomeComponent implements OnInit {
  data: any;

  constructor(private store: Store<AppState>,private service:ListingsService) { 
    
  }


  ngOnInit() {
    this.store.select('spaces').subscribe(x => this.data=x.listings);
    this.service.getUserById('1').subscribe(x=>console.log(x));
  }




}