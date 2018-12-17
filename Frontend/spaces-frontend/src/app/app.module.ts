import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AdminModule} from './admin-module/admin-module.module'
import {CustomerModule} from './customer/customer.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderModule } from './provider/provider.module';


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ProviderModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
