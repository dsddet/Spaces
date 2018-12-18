import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './redux/store';
import { ListingsService } from './admin-module/services/get-approved-listings.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { filter } from 'rxjs/Operators';

@Component({
  selector: 'app-root',
    
   //template: `<provider-home></provider-home>`, //Provider by Bre
  
  //template: ` <app-login-home></app-login-home> `, //Admin by Deus

  //template :  `<customer-profile></customer-profile>`, // Customer by Dawit

  // template: `
   
  // <button (click)="printData()">Results</button> 
  // <br><br>

  // <ol>
  // <li *ngFor="let coin of coins | async">
  //         {{ coin.name }}  {{ coin.price }}
  //     </li></ol>
  // `,
  //templateUrl: './app.component.html',
  template:`
  <home-page></home-page>
   <app-login-home></app-login-home>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaces-frontend';

  message: string;
  sub: any;
  user: any;
  username: string;

  constructor(private store: Store<AppState>, private service: ListingsService) {

    // var subscript = this.service.getListings("any").subscribe(x => this.sub = x);
    // this.store.dispatch({ type: 'ADD_LISTINGS', payload: { listings: this.sub } });

    var subscr = this.store.select('spaces').subscribe(x => this.message = x);

    // this.service.getUserById("1").subscribe(x => this.user = x);
    // this.store.dispatch({ type: 'NEW USER', payload: this.user });




  }

  printData() {

    // this.service.getUserById("1").subscribe(x => {
    //   this.store.dispatch({ type: 'NEW USER', payload: x });
    // });
    this.username = this.user.FirstName;



  }


}
