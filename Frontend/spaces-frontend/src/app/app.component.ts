import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    
  // template: `<provider-home></provider-home>`, //Provider by Bre
  
  //template: ` <app-login-home></app-login-home> `, //Admin by Deus

  template :  `<customer-profile></customer-profile>`, // Customer by Dawit
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaces-frontend';
}
