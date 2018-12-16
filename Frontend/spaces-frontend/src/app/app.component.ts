import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
  
//template: `<provider-home></provider-home>`, //Provider by Bre
  
  template: ` <app-login-home></app-login-home> `, //Admin by Deus
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaces-frontend';
}
