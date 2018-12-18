import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AdminModule} from './admin-module/admin-module.module'
import {CustomerModule} from './customer/customer.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderModule } from './provider/provider.module';
import { StoreModule} from '@ngrx/store';
import { addCoinReducer} from './redux/store'


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ProviderModule,
    CustomerModule,
    StoreModule.forRoot({spaces:addCoinReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
