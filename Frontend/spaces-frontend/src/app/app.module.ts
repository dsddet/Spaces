import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AdminModule} from './admin-module/admin-module.module'
import {CustomerModule} from './customer/customer.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';
import { AddHouseComponent } from './provider/add-house.component';
import { EditHouseComponent } from './provider/edit-house.component';

@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    AddHouseComponent,
    EditHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
