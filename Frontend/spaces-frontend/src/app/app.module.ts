import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AdminModule} from './admin-module/admin-module.module'
import {CustomerModule} from './customer/customer.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderModule } from './provider-module/provider.module';
import { StoreModule} from '@ngrx/store';
import { addCoinReducer} from './redux/store'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login-module/login/login.component';
import { SignupComponent } from './login-module/signup/signup.component';
import { HomepageComponent } from './home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ProviderModule,
    CustomerModule,
<<<<<<< HEAD
    StoreModule.forRoot({spaces:addCoinReducer})
=======
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({blockchain:addCoinReducer})
>>>>>>> c04eefa19c86fb689ed53e2429e4626ef1ec858c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
