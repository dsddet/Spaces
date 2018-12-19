import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/store';
import { filter } from 'rxjs/Operators';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  data: any;

  constructor(private store: Store<AppState>) {


  }

  ngOnInit() {
  }

  getStore() {
    this.store.select('spaces').subscribe(x => console.log(x));
  }

  getPending() {
    this.store.select('spaces').subscribe(x => this.data = x.listings.forEach(element => {if (element.Status === "pending") console.log(element); }));
  }

}
