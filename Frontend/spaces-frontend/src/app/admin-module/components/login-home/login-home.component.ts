import { Component, OnInit, Output, Input } from '@angular/core';
import { ListingsService } from '../../services/get-approved-listings.service'
import { Store } from '@ngrx/store';
import {AppState } from '../../../redux/store';


@Component({
  // providers: [ListingsService],
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  //<p class="listing" *ngFor="let listing of data">{{listing["Name"]}}</p>
  //template: `{{data}}`,
  styleUrls: ['./login-home.component.css'],

})
export class LoginHomeComponent implements OnInit {
  //@Input() data: string;

  constructor(private store: Store<AppState>) { 
    
  }


  ngOnInit() {
    this.store.select('spaces').subscribe(x => console.log(x.user));
  }




}