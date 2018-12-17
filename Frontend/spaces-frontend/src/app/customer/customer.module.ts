import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { ListingComponent } from './listing/listing.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
      CustomerHomeComponent,
      ListingViewComponent,
      ListingComponent,
      ImageCarouselComponent,
      ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
      CustomerHomeComponent,
      ListingViewComponent,
      ListingComponent,
      ImageCarouselComponent,
      ProfileComponent
  ]
})
export class CustomerModule { }
