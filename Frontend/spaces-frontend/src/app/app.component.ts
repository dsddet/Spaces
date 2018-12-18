import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import { AppState} from './redux/store';
import { ListingsService } from './admin-module/services/get-approved-listings.service';

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
  <listing-view></listing-view>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaces-frontend';

  coins:Observable<any>

  constructor(private store: Store<AppState>, private service:ListingsService) {
    this.coins = this.store.select('blockchain');
  }

  printData() {

    this.store.dispatch({ type: 'ADD_COIN', payload: { name: 'Iota', price: 700 } });
  }

  

}
