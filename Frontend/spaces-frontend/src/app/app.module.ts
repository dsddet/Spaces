import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
